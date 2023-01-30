import { combineReducers } from "redux";
import carReducer from "./Cart/reducer";
const rootReducer = combineReducers({ carReducer });

export default rootReducer;
