import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

import LMC from 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import styled from 'styled-components';
import {connect} from "react-redux";
import {addFootprint, deleteFootprint} from "../../store/actions/travelActions";



const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

let map;

class Map extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.lng !== prevProps.lng) {
            map.panTo([this.props.lat, this.props.lng]);
        }
    }

    componentDidMount(){
        const {lat, lng, addFootprint, deleteFootprint} = this.props;
        map = L.map('map1', {
            center: [lat, lng],
            zoom: 10
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            foo: 'bar',
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        }).addTo(map);

        //search a city
        L.Control.geocoder().addTo(map);

        const markerIcon = L.icon({
            iconUrl: '/assets/redMarker.png',
            iconSize: [15, 30],
        });

        map.on('click', function(e) {
            //console.log(e.latlng);
            const marker = L.marker(e.latlng, {icon: markerIcon}).addTo(map);
            addFootprint(e.latlng);
            //marker.bindPopup("<b>Hello world!</b><br>");
            //marker.bindTooltip('Lat: ' + e.latlng.lat + '<br>Lng: '+e.latlng.lng);

            marker.on('click', function() {
                map.removeLayer(this);
                deleteFootprint(this.getLatLng());
            });
        });

        // const markers = L.markerClusterGroup();
        // markers.addLayer(L.marker(getRandomLatLng(map)));
        // map.addLayer(markers);

        // const polygon = L.polygon([
        //     [51.509, -0.08],
        //     [51.503, -0.06],
        //     [51.51, -0.047]
        // ]).addTo(map);
        // polygon.bindPopup("I am a polygon.");
        //
        // const circle = L.circle([51.508, -0.11], {
        //     color: 'red',
        //     fillColor: '#f03',
        //     fillOpacity: 0.5,
        //     radius: 500
        // }).addTo(map);
        // circle.bindPopup("I am a circle.");
    }

    render() {
        return (
            <Wrapper width={'900px'} height={'480px'} id={'map1'} />
        )
    }
}



const mapStateToProps = (state) => {
    if(state.travel.city.lat === '' && state.travel.city.lng === ''){
        return {
            lat: 39.9,
            lng: 116.4
        }
    }else{
        return {
            lat: Number.parseFloat(state.travel.city.lat),
            lng: Number.parseFloat(state.travel.city.lng)
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFootprint: (newFootprint) => dispatch(addFootprint(newFootprint)),
        deleteFootprint: (footprint) => dispatch(deleteFootprint(footprint))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
