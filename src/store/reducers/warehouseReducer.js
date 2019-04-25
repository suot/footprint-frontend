
const initState = {
    completion_sdb_add: true,
    completion_sdb_delete: true,
    completion_warehouse_add: true,
    completion_warehouse_delete: true,
    cityList: null,
    cityListMapCenter: null,
}

const warehouseReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_COMPLETION_SDB_ADD':{
            state.completion_sdb_add = false;
            return state;
        }
        case 'CHANGE_COMPLETION_SDB_DELETE':{
            state.completion_sdb_delete = false;
            return state;
        }
        case 'CHANGE_COMPLETION_WAREHOUSE_ADD':{
            state.completion_warehouse_add = false;
            return state;
        }
        case 'CHANGE_COMPLETION_WAREHOUSE_DELETE':{
            state.completion_warehouse_delete = false;
            return state;
        }
        case 'ADD_SAMPLE_SDB':{
            if(action.response.status === 200){
                console.log(action.response.data);
                state.completion_sdb_add = true;
            }else{
                console.log("Error occurs when adding sample data to source db with response status: ", action.response.status)
            }
            return state;
        }
        case 'DELETE_SAMPLE_SDB':{
            if(action.response.status === 202){
                console.log(action.response.data);
                state.completion_sdb_delete = true;
            }else{
                console.log("Error occurs when deleting sample data from source db with response status: ", action.response.status)
            }
            return state;
        }
        case 'ADD_DATA_TO_WAREHOUSE':{
            if(action.result.status === 200){
                console.log(action.result.data);
                state.completion_warehouse_add = true;
            }else{
                console.log("Error occurs when adding sample data from warehouse to source db with response status: ", action.result.status)
            }
            return state;
        }
        case 'DELETE_SAMPLE_FROM_WAREHOUSE':{
            if(action.result.status === 202){
                console.log(action.result.data);
                state.completion_warehouse_delete = true;
            }else{
                console.log("Error occurs when deleting sample data from warehouse with response status: ", action.result.status)
            }
            return state;
        }
        case 'GET_CITY_LIST':{
            if(action.cityList.status === 200){
                console.log(action.cityList.data);
                state.cityList = action.cityList.data;
            }else{
                console.log("Error occurs when retrieving the city list from warehouse")
            }
            return state;
        }
        case 'CHANGE_MAPCENTER_CITYLIST':{
            console.log('Changed the center of city list map to ', action.latlng);
            state.cityListMapCenter = action.latlng;
            return state;
        }
        case 'CLEAN_UP_WAREHOUSE_REDUCER_STATE':{
            state = {
                completion_sdb_add: true,
                completion_sdb_delete: true,
                completion_warehouse_add: true,
                completion_warehouse_delete: true,
                cityList: null,
                cityListMapCenter: null,
            };
            return state;
        }
        default:
            return state;
    }
}

export default warehouseReducer