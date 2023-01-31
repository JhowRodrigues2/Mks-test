import { combineReducers } from "redux";
import carReducer from "./Cart/slice";

const rootReducer = combineReducers({ carReducer });
export default rootReducer;
