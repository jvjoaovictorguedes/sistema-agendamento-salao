import { combineReducers } from "redux";

import schedulingReducer from "./user/reducer";

const rootReducer = combineReducers({ schedulingReducer });

export default rootReducer;
