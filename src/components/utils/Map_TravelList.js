import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

import LMC from 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import styled from 'styled-components';
import {connect} from "react-redux";


const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

let map_AddTravel;

class Map_AddTravel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            travelList: null,
            timelines: []
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.latlng !== prevProps.latlng) {
            map_AddTravel.panTo([this.props.latlng.lat, this.props.latlng.lng]);
        }
    }

    componentDidMount(){
        map_AddTravel = L.map('map2', {
            center: [39.9, 116.4],
            zoom: 10
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

        this.props.travelList && this.props.travelList.map(travel => {
            const latlng = travel.city.latlng;

        });



        // const markers = L.markerClusterGroup();
        // markers.addLayer(L.marker(getRandomLatLng(map_AddTravel)));
        // map_AddTravel.addLayer(markers);
        // const polygon = L.polygon([
        //     [51.509, -0.08],
        //     [51.503, -0.06],
        //     [51.51, -0.047]
        // ]).addTo(map_AddTravel);
        // polygon.bindPopup("I am a polygon.");
        //
        // const circle = L.circle([51.508, -0.11], {
        //     color: 'red',
        //     fillColor: '#f03',
        //     fillOpacity: 0.5,
        //     radius: 500
        // }).addTo(map_AddTravel);
        // circle.bindPopup("I am a circle.");
    }

    render() {
        return (
            <Wrapper width='100%' height='450px' id={'map2'} />
            // <Wrapper width={'900px'} height={'480px'} id={'map1'} />
        )
    }
}



const mapStateToProps = (state) => {
    return {
        travelList: state.travel.travelList,
    }
}

export default connect(mapStateToProps)(Map_AddTravel);
