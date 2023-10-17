import { legacy_createStore, combineReducers } from 'redux'
import detailsReducer  from './Reducers'

const rootReducer = combineReducers({
    details:detailsReducer
})

export const store = legacy_createStore(rootReducer);
