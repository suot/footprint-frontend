import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import { Lightbox } from "react-modal-image"



const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

let map_CityList;

class Map_CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            markerUrl: ''
        };
    }
    showModal = (markerUrl) => {
        console.log(markerUrl)
        this.setState({
            markerUrl: markerUrl,
            open: true
        });
    }
    handleClose = () => {
        this.setState({
            open: false,
            markerUrl: ''
        });
    }


    componentDidUpdate(prevProps) {
        if (this.props.cityListMapCenter !== prevProps.cityListMapCenter) {
            map_CityList.flyTo(this.props.cityListMapCenter, 7, { animate: true, duration: 4.0 });
        }
    }

    componentDidMount(){
        map_CityList = L.map('map2', {
            center: [39.9, 116.4],
            zoom: 2
        });

        //OpenStreetMap tileLayer
        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //     minZoom: 2,
        //     foo: 'bar',
        //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        // }).addTo(map_CityList);
        //Google tileLayer
        L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            minZoom: 2,
            subdomains:['mt0','mt1','mt2','mt3'],
            attribution: 'Tile Layer &copy; <a href="https://www.google.com/maps">Google Maps</a>'
        }).addTo(map_CityList);

        this.renderAllFootprintsOnMap();
    }

    renderAllFootprintsOnMap(){
        this.props.cityList && this.props.cityList.map(city => {
            let markerUrl = '/assets/sampleCities/'+city.name+'.jpg';
            const markerIcon = L.icon({
                iconUrl: markerUrl,
                iconSize: [40, 40],
            });
            const marker = L.marker(city.latlng, {icon: markerIcon}).addTo(map_CityList).on('click', url => this.showModal(markerUrl));
        });
    }

    render() {
        return (
            <Wrapper width='100%' height='450px' id={'map2'}>
            {/*<Wrapper width={'900px'} height={'480px'} id={'map1'} />*/}

                {
                    this.state.open && (
                        <Lightbox
                            medium={this.state.markerUrl}
                            large={this.state.markerUrl}
                            alt="Hello World!"
                            onClose={this.handleClose}
                        />
                    )
                }

            </Wrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cityList: state.warehouse.cityList,
        cityListMapCenter: state.warehouse.cityListMapCenter
    }
}

export default connect(mapStateToProps)(Map_CityList);
