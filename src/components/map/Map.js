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


class Map extends React.Component {
    componentDidMount(){
        const map = L.map('map1', {
            center: [39.9, 116.4],
            zoom: 12
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
            console.log(e.latlng);
            const marker = L.marker(e.latlng, {icon: markerIcon}).addTo(map);
            //marker.bindPopup("<b>Hello world!</b><br>");
            //marker.bindTooltip('Lat: ' + e.latlng.lat + '<br>Lng: '+e.latlng.lng);

            marker.on('click', function() {
                map.removeLayer(this);
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



const mapStateToProps = (state, ownProps) => {
    // const uid = ownProps.match.params.uid;
    // // const footprints = state.firestore.data.footprints;
    // // const footprint = footprints ? footprints[id] : null
    // return {
    //     // footprint: footprint,
    // }
}


export default connect(mapStateToProps)(Map);
