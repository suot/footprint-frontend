import { combineReducers } from 'redux'
import authReducer from './authReducer'
import footprintReducer from './footprintReducer'
import travelReducer from './travelReducer'
import warehouseReducer from './warehouseReducer'

import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({    
    auth: authReducer,
    footprint: footprintReducer,
    travel: travelReducer,
    warehouse: warehouseReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer