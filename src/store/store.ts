import {combineReducers, legacy_createStore as createStore} from "redux";
import {projectReducer} from "./reducers/projectReducer";
import {taskReducer} from "./reducers/taskReducer";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({projectReducer, taskReducer})

const persistedReducer = persistReducer(persistConfig, reducers)

export type RootState = ReturnType<typeof persistedReducer>

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)