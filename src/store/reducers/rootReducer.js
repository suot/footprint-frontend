import authReducer from './authReducer'
import footprintReducer from './footprintReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({    
    auth: authReducer,
    footprint: footprintReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer