import { combineReducers } from 'redux'
import authReducer from './authReducer'
import footprintReducer from './footprintReducer'
import travelReducer from './travelReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({    
    auth: authReducer,
    footprint: footprintReducer,
    travel: travelReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer