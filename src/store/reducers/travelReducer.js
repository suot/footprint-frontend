

const initState = {
    city: {
        name: null,
        country: null,
        lat: null,
        lng: null
    },
    startDate: null,
    endDate: null,
    rating: null,
    footprints: []
}

const travelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CITY':{
            console.log('add city', action.city);
            state.city = action.city;
            return state;
        }
        case 'ADD_TRAVEL_TIME':{
            console.log('add travel time', action.startDate, action.endDate);
            state.startDate = action.startDate;
            state.endDate = action.endDate;
            return state;
        }
        case 'ADD_TRAVEL_RATING':{
            console.log('add city rating', action.rating);
            state.rating = action.rating;
            return state;
        }
        case 'ADD_FOOTPRINT':{
            console.log('add footprint', action.footprint);
            state.footprints.push(action.footprint);
            return state;
        }
        case 'DELETE_FOOTPRINT':{
            console.log('delete footprint', action.footprint);
            const newFootprints = state.footprints.filter(footprint1 => footprint1 != action.footprint);
            state.footprints = newFootprints;
            // console.log(state.footprints);
            return state;
        }
        case 'ADD_TRAVEL':{
            console.log('Added travel record ' + action._id + ' to MongoDB server ' + action.region);
            return state;
        }
        default:
            return state;
    }
}

export default travelReducer