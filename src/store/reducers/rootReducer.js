import authReducer from './authReducer'
import footprintReducer from './footprintReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    footprint: footprintReducer,
    firestore: firestoreReducer,
});

export default rootReducer