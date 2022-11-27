import {combineReducers, legacy_createStore as createStore} from "redux";
import {projectReducer} from "./reducers/projectReducer";
import {taskReducer} from "./reducers/taskReducer";

const reducers = combineReducers({projectReducer, taskReducer})

export type RootState = ReturnType<typeof reducers>

export const store = createStore(reducers)