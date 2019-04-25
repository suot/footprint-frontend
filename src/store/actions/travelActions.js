import axios from 'axios'


export const addCity = (city) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_CITY', city });
    }
};

export const addFootprint = (footprint) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_FOOTPRINT', footprint });
    }
};

export const deleteFootprint = (footprint) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_FOOTPRINT', footprint });
    }
};

export const addTravelTime = (startDate, endDate) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_TRAVEL_TIME', startDate, endDate });
    }
};

export const addRating = (rating) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_TRAVEL_RATING', rating });
    }
};


export const addTravel = (travel, uid) => {
    return (dispatch, getState) => {
        let sourceDbServer = getState().travel.sourceDbServer;

        axios.post(sourceDbServer + '/travel', {
            userId: uid,
            travel: travel
        }).then(function (newTravel) {
            const travel = newTravel.data;
            dispatch({ type: 'ADD_TRAVEL', travel });
        }).catch(function (error) { console.log(error); });
    }
};

export const deleteTravel = (travelId) => {
    return (dispatch, getState) => {
        let sourceDbServer = getState().travel.sourceDbServer;

        axios.delete(sourceDbServer + '/travel', {params: { _id: travelId }}).then(function (removedTravel) {
            const travel = removedTravel.data;
            dispatch({ type: 'DELETE_TRAVEL', travel });
        }).catch(function (error) { console.log(error); });
    }
};

export const getTravelList = (uid) => {
    return (dispatch, getState) => {
        let request = getState().travel.sourceDbServer + '/travel?userId=' + uid;
        axios.get(request)
            .then(function (response) {
                const travelList = response.data;
                const userId = uid;
                dispatch({ type: 'GET_TRAVEL_LIST', userId, travelList });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const changeMapCenter_TravelList = (latlng) => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_MAPCENTER_TRAVELLIST', latlng });
    }
};

export const changeServer = (region) => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_SERVER', region });
    }
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
            dispatch({ type: 'CLEAN_UP_WAREHOUSE_REDUCER_STATE' })
        }).catch((err) => {
            dispatch({ type: 'LOGOUT_ERROR', err })
        });
    }
};