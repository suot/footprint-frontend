import axios from 'axios'


export const addCity = (city) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'ADD_CITY', city });
    }
}

export const addFootprint = (footprint) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'ADD_FOOTPRINT', footprint });
    }
}

export const deleteFootprint = (footprint) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'DELETE_FOOTPRINT', footprint });
    }
}

export const addTravelTime = (startDate, endDate) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'ADD_TRAVEL_TIME', startDate, endDate });
    }
}

export const addRating = (rating) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'ADD_TRAVEL_RATING', rating });
    }
}

export const addTravel = (travelRecord, uid, region) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //console.log(travelRecord);

        // axios.get('http://localhost:3001/travel?userId=a11')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        let port;
        if(region === 'Canada'){
            port = '3001'; //server1_Canada
        }else{
            port = '3002'; //server2_Asia
        }

        axios.post('http://localhost:' + port + '/city', travelRecord.city)
            .then(function (newCity) {
                axios.post('http://localhost:' + port + '/travel', {
                    userId: uid,
                    cityId: newCity.data._id,
                    startDate: travelRecord.startDate,
                    endDate: travelRecord.endDate,
                    travelType: travelRecord.travelType,
                    cost: travelRecord.cost,
                    rating: travelRecord.rating,
                    footprints: travelRecord.footprints
                }).then(function (newTravel) {
                    console.log(newTravel);
                    const _id = newTravel.data._id;
                    dispatch({ type: 'ADD_TRAVEL', _id, region });
                }).catch(function (error) { console.log(error); });
            }).catch(function (error) { console.log(error); });

    }
}