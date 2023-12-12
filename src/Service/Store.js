import { legacy_createStore, combineReducers } from 'redux'
import reducer  from './Reducers'
import { persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const rootReducer = combineReducers({
    practice:reducer
})

const persistConfig = {
    key:'root',
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = legacy_createStore(persistedReducer);
export const persistor = persistStore(store)