import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components'
import {connect} from "react-redux";


const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;


class MyFootprints extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         lat: 51.505,
    //         lng: -0.09,
    //         zoom: 13,
    //     };
    // }

    componentDidMount(){
        const map = L.map('map1', {
            center: [51.505, -0.09],
            zoom: 5
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
            foo: 'bar',
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        }).addTo(map);

        const myIcon = L.icon({
            iconUrl: '/assets/redMarker.png',
            iconSize: [15, 30],
        });
        const marker = L.marker([51.505, -0.09], {icon: myIcon}).addTo(map);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

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
            <Wrapper width={'1280px'} height={'720px'} id={'map1'} />
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    const uid = ownProps.match.params.uid;
    // const footprints = state.firestore.data.footprints;
    // const footprint = footprints ? footprints[id] : null
    return {
        // footprint: footprint,
    }
}


export default connect(mapStateToProps)(MyFootprints);
