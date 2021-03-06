import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';


const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

let map_TravelList;

class Map_TravelList extends React.Component {
    componentDidUpdate(prevProps) {
        if(this.props.travelList){
            if(prevProps.travelList){
                //when adding a travel record, add its footprints on to the map. When deleting a travel record, delete its footprints from the map.
                if(this.props.lastAddedTravel !== prevProps.lastAddedTravel){
                    this.addFootprintsOnMap(this.props.lastAddedTravel);
                }

                if(this.props.lastDeletedTravel !== prevProps.lastDeletedTravel){
                    this.DeleteFootprintsFromMap(this.props.lastDeletedTravel);
                }

                if (this.props.travelListMapCenter !== prevProps.travelListMapCenter) {
                    map_TravelList.flyTo(this.props.travelListMapCenter, 9, { animate: true, duration: 5.0 });
                }
            }else{
                //when getTravelList returns back with value, including empty list []
                this.renderAllFootprintsOnMap();
            }

        }
    }

    componentDidMount(){
        map_TravelList = L.map('map3', {
            center: [18, 16],
            zoom: 2
        });

        //OpenStreetMap tileLayer
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            minZoom: 2,
            foo: 'bar',
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        }).addTo(map_TravelList);
        //Google tileLayer
        // L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
        //     maxZoom: 20,
        //     minZoom: 2,
        //     subdomains:['mt0','mt1','mt2','mt3'],
        //     attribution: 'Tile Layer &copy; <a href="https://www.google.com/maps">Google Maps</a>'
        // }).addTo(map_TravelList);

        this.renderAllFootprintsOnMap();
    }

    renderAllFootprintsOnMap(){
        const markerIcon = L.icon({
            iconUrl: '/assets/redMarker.png',
            iconSize: [15, 25],
        });

        this.props.travelList && this.props.travelList.map(travel => {
            let footprints = travel.footprints;
            let layerGroup = L.markerClusterGroup();
            footprints && footprints.map(footprint=>{
                return layerGroup.addLayer(L.marker(footprint, {icon: markerIcon}));
            });
            //id is used to find that layerGroup and delete it including all its markers.
            layerGroup.id = travel._id;
            return layerGroup.addTo(map_TravelList);
        });
    }

    addFootprintsOnMap(travel){
        const markerIcon = L.icon({
            iconUrl: '/assets/redMarker.png',
            iconSize: [15, 25],
        });
        let layerGroup = L.markerClusterGroup();
        travel.footprints && travel.footprints.map(footprint=>{
            return layerGroup.addLayer(L.marker(footprint, {icon: markerIcon}));
        });
        layerGroup.id = travel._id;
        layerGroup.addTo(map_TravelList);
    }

    DeleteFootprintsFromMap(travel){
        map_TravelList.eachLayer(function(layer){
            if(travel._id === layer.id){
                map_TravelList.removeLayer(layer);
            }
        });
    }


    render() {
        return (
            <Wrapper width='100%' height='450px' id={'map3'} />
            // <Wrapper width={'900px'} height={'480px'} id={'map1'} />
        )
    }
}



const mapStateToProps = (state) => {
    return {
        travelList: state.travel.travelList,
        lastAddedTravel: state.travel.lastAddedTravel,
        lastDeletedTravel: state.travel.lastDeletedTravel,
        travelListMapCenter: state.travel.travelListMapCenter
    }
};

export default connect(mapStateToProps)(Map_TravelList);
