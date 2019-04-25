import axios from 'axios'
import config from '../../components/auth/config/config'


export const addSampleDataToSourceDB = (amount) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CHANGE_COMPLETION_SDB_ADD' });
        let sourceDbServer = getState().travel.sourceDbServer;
        let request = sourceDbServer + '/sampleTravels/add?amount=' + amount;
        axios.get(request).then(response => {
            dispatch({ type: 'ADD_SAMPLE_SDB', response });
        }).catch(function (error) { console.log(error); });
    }
};

export const deleteSampleDataFromSourceDB = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'CHANGE_COMPLETION_SDB_DELETE' });
        let sourceDbServer = getState().travel.sourceDbServer;
        let request = sourceDbServer + '/warehouse/sampleTravels';
        axios.delete(request).then(response => {
            dispatch({ type: 'DELETE_SAMPLE_SDB', response });
        }).catch(function (error) { console.log(error); });
    }
};


//synchronize warehouse with source databases
export const addDataFromSourceDBToWarehouse = () => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_COMPLETION_WAREHOUSE_ADD' });

        let request_sdb1 = config.server_Canada + '/travel';
        let request_sdb2 = config.server_Asia + '/travel';
        let request_warehouse = config.server_Warehouse + '/warehouse/add';
        let travelList;

        axios.get(request_sdb1).then( response1 => {
            travelList = response1.data;
            console.log("Number of rows in db1: ", response1.data.length);

            axios.get(request_sdb2).then(response2 => {
                let dataset2 = response2.data;
                console.log("Number of rows in db2: ", dataset2.length);

                dataset2 && dataset2.map(data=>{
                    return travelList.push(data);
                });

                axios.post(request_warehouse, travelList).then(result => {
                    dispatch({ type: 'ADD_DATA_TO_WAREHOUSE', result });
                }).catch(function (error) { console.log(error); });
            }).catch(function (error) { console.log(error);});

        }).catch(function (error) { console.log(error);});

    }
};

export const deleteDataFromWarehouse = () => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_COMPLETION_WAREHOUSE_DELETE' });

        let request_warehouse = config.server_Warehouse + '/warehouse/delete';
        axios.delete(request_warehouse).then(result => {
            dispatch({ type: 'DELETE_SAMPLE_FROM_WAREHOUSE', result });
        }).catch(function (error) { console.log(error); });
    }
};


export const getCityList = (query) => {
    return (dispatch) => {
        let request_warehouse = config.server_Warehouse + '/warehouse/cityList';
        axios.post(request_warehouse, query).then(cityList => {
            dispatch({type: 'GET_CITY_LIST', cityList});
        }).catch(function (error) {
            console.log(error);
        });
    }
};

export const changeMapCenter_CityList = (latlng) => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_MAPCENTER_CITYLIST', latlng });
    }
};