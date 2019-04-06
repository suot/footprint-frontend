import React from 'react';
import {connect} from "react-redux";
import {addFootprint, deleteFootprint} from "../../../store/actions/travelActions";
import styled from 'styled-components';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';


const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

let map_AddTravel;

class Map_AddTravel extends React.Component {

    componentDidUpdate(prevProps) {
        //if(this.props.newTravel && this.props.newTravel.city){
            if (this.props.newCity.latlng !== prevProps.newCity.latlng) {
                map_AddTravel.flyTo(this.props.newCity.latlng, 10, {animate: true, duration: 5.0});
            }
        //}
    }

    componentDidMount(){
        const {addFootprint, deleteFootprint} = this.props;
        map_AddTravel = L.map('map1', {
            //center: [latlng.lat, latlng.lng],
            center: [18, 16],
            zoom: 2
        });

        //OpenStreetMap tileLayer
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            minZoom: 2,
            foo: 'bar',
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        }).addTo(map_AddTravel);

        //Google tileLayer
        // L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
        //     maxZoom: 20,
        //     minZoom: 2,
        //     subdomains:['mt0','mt1','mt2','mt3'],
        //     attribution: 'Tile Layer &copy; <a href="https://www.google.com/maps">Google Maps</a>'
        // }).addTo(map_AddTravel);

        //search a city
        L.Control.geocoder().addTo(map_AddTravel);

        const markerIcon = L.icon({
            iconUrl: '/assets/redMarker.png',
            iconSize: [15, 30],
        });

        map_AddTravel.on('click', function(e) {
            //console.log(e.latlng);
            const marker = L.marker(e.latlng, {icon: markerIcon}).addTo(map_AddTravel);
            console.log(marker.getLayerId);
            addFootprint(e.latlng);
            //marker.bindPopup("<b>Hello world!</b><br>");
            //marker.bindTooltip('Lat: ' + e.latlng.lat + '<br>Lng: '+e.latlng.lng);

            marker.on('click', function() {
                map_AddTravel.removeLayer(this);
                deleteFootprint(this.getLatLng());
            });
        });
    }

    render() {
        return (
            <Wrapper width='100%' height='450px' id={'map1'} />
            // <Wrapper width={'900px'} height={'480px'} id={'map1'} />
        )
    }
}



const mapStateToProps = (state) => {
    return {
        //latlng: ((state.travel.newTravel.city.latlng.lat === null || state.travel.newTravel.city.latlng.lng === null)? {lat: 18, lng: 16} : state.travel.newTravel.city.latlng),
        newCity: state.travel.newTravel.city
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFootprint: (newFootprint) => dispatch(addFootprint(newFootprint)),
        deleteFootprint: (footprint) => dispatch(deleteFootprint(footprint))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Map_AddTravel);
