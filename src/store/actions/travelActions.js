import axios from 'axios'


export const addCity = (city) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_CITY', city });
    }
}

export const addFootprint = (footprint) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_FOOTPRINT', footprint });
    }
}

export const deleteFootprint = (footprint) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_FOOTPRINT', footprint });
    }
}

export const addTravelTime = (startDate, endDate) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_TRAVEL_TIME', startDate, endDate });
    }
}

export const addRating = (rating) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_TRAVEL_RATING', rating });
    }
}


export const addTravel = (travelRecord, uid) => {
    return (dispatch, getState) => {
        let sourceDbServer = getState().travel.sourceDbServer;

        axios.post(sourceDbServer + '/travel', {
            uid: uid,
            travelRecord: travelRecord
        }).then(function (newTravel) {
            const travel = newTravel.data;
            dispatch({ type: 'ADD_TRAVEL', travel });
        }).catch(function (error) { console.log(error); });
    }
}

export const deleteTravel = (travelId, rating) => {
    return (dispatch, getState) => {
        let sourceDbServer = getState().travel.sourceDbServer;

        axios.delete(sourceDbServer + '/travel', { _id: travelId, rating: rating }).then(function (removedTravel) {
            const _id = removedTravel.data._id;
            dispatch({ type: 'DELETE_TRAVEL', _id });
        }).catch(function (error) { console.log(error); });
    }
}

export const getTravelList = (uid) => {
    return (dispatch, getState) => {


        // axios.get('http://localhost:3001/travel?userId=a11')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
}

export const changeServer = (region) => {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_SERVER', region });
    }
}