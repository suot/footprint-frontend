const initState = {
    city: {
        name: '',
        country: '',
        lat: '',
        lng: ''
    },
    startDate: '',
    endDate: '',
    cost: 0,
    travelType: '',
    rating: 0,
    footprints: []
}

const travelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CITY':{
            console.log('add city', action.city);
            state.city = action.city;
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
            console.log(state.footprints);
            return state;
        }
        case 'ADD_TRAVEL':{
            console.log('add travel', action.travel);
            return state;
        }
        case 'ADD_TRAVEL_ERROR':{
            console.log('add travel error', action.err);
            return state;
        }
        default:
            return state;
    }
}

export default travelReducer