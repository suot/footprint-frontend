import authReducer from './authReducer'
import footprintReducer from './footprintReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    footprint: footprintReducer,
});

export default rootReducer