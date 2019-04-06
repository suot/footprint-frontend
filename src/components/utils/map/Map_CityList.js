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
        console.log(markerUrl);
        this.setState({
            markerUrl: markerUrl,
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
            markerUrl: ''
        });
    };


    componentDidUpdate(prevProps) {
        if (this.props.cityListMapCenter !== prevProps.cityListMapCenter) {
            map_CityList.flyTo(this.props.cityListMapCenter, 9, { animate: true, duration: 5.0 });
        }
        //Click on "Query" button again, the returned cityList will be updated, and thereafter the markers on the map should be updated
        if (this.props.cityList !== prevProps.cityList) {
            map_CityList.flyTo([18, 16], 2, { animate: true, duration: 3.0 });
            map_CityList.eachLayer(function(layer){
                if("cityList" === layer.id){
                    map_CityList.removeLayer(layer);
                }
            });

            this.renderCityThumbnailsOnMap();
        }
    }

    componentDidMount(){
        map_CityList = L.map('map2', {
            center: [18, 16],
            zoom: 2
        });

        L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
            maxZoom: 12,
            minZoom: 2,
            subdomains:['mt0','mt1','mt2','mt3'],
            attribution: 'Tile Layer &copy; <a href="https://www.google.com/maps">Google Maps</a>'
        }).addTo(map_CityList);

        this.renderCityThumbnailsOnMap();
    }

    renderCityThumbnailsOnMap(){
        let layerGroup = L.markerClusterGroup();
        this.props.cityList && this.props.cityList.map(city => {
            let markerUrl = '/assets/sampleCities/'+city.name+'.jpg';
            const markerIcon = L.icon({
                iconUrl: markerUrl,
                iconSize: [40, 40],
            });
            return layerGroup.addLayer(L.marker(city.latlng, {icon: markerIcon}).on('click', () => this.showModal(markerUrl)));
        });
        layerGroup.id = "cityList";
        layerGroup.addTo(map_CityList);
    }

    render() {
        return (
            <Wrapper width='100%' height='450px' id={'map2'}>
                {
                    this.state.open && (
                        <Lightbox
                            medium={this.state.markerUrl}
                            large={this.state.markerUrl}
                            alt="Photo url is invalid!"
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
};

export default connect(mapStateToProps)(Map_CityList);
