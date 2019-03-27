
const initState = {
    newTravel:{
        city: {
            name: null,
            country: null,
            latlng: {
                lat: null,
                lng: null
            }
        },
        startDate: null,
        endDate: null,
        rating: null,
        footprints: [],
    },
    travelList: null,
    lastAddedTravel: null,
    lastDeletedTravel: null,
    travelListMapCenter: null,
    sourceDbServer: null,
}

const travelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CITY':{
            console.log('add city', action.city);
            state.newTravel.city = action.city;
            return state;
        }
        case 'ADD_TRAVEL_TIME':{
            console.log('add travel time', action.startDate, action.endDate);
            state.newTravel.startDate = action.startDate;
            state.newTravel.endDate = action.endDate;
            return state;
        }
        case 'ADD_TRAVEL_RATING':{
            console.log('add city rating', action.rating);
            state.newTravel.rating = action.rating;
            return state;
        }
        case 'ADD_FOOTPRINT':{
            console.log('add footprint', action.footprint);
            state.newTravel.footprints.push(action.footprint);
            return state;
        }
        case 'DELETE_FOOTPRINT':{
            console.log('delete footprint', action.footprint);
            const newFootprints = state.newTravel.footprints.filter(footprint1 => footprint1 !== action.footprint);
            state.newTravel.footprints = newFootprints;
            // console.log(state.newTravel.footprints);
            return state;
        }
        case 'ADD_TRAVEL':{
            console.log('Added a new travel record: ', action.travel);

            state.newTravel = {
                city: {
                    name: null,
                    country: null,
                    latlng:{
                        lat: null,
                        lng: null
                    }
                },
                startDate: null,
                endDate: null,
                rating: null,
                footprints: []
            }

            state.travelList.push(action.travel);
            state.lastAddedTravel = action.travel;

            return state;
        }
        case 'DELETE_TRAVEL':{
            console.log('Deleted the travel record: ', action.travel);
            state.lastDeletedTravel = state.travelList.find(travel => travel._id === action.travel._id);
            state.travelList = state.travelList.filter(travel => travel._id !== action.travel._id);
            return state;
        }
        case 'GET_TRAVEL_LIST':{
            console.log('Get travel list of user ' + action.userId + ': ', action.travelList);
            state.travelList = action.travelList;
            return state;
        }
        case 'CHANGE_MAPCENTER_TRAVELLIST':{
            console.log('Changed the center of travel list map to ', action.latlng);
            state.travelListMapCenter = action.latlng;
            return state;
        }
        case 'CHANGE_SERVER':{
            const region = action.region;

            if(region === 'Canada' || region === null || region === ''){
                state.sourceDbServer = 'http://localhost:3001';
            }else{
                state.sourceDbServer = 'http://localhost:3002';
            }
            console.log("sourceDbServer: ", state.sourceDbServer);
            return state;
        }
        default:
            return state;
    }
}

export default travelReducer