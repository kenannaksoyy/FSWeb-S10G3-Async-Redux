import { combineReducers } from 'redux';

import boredReducer from "./boredReducer";
import dogReducer from "./dogReducer";

const combReducer = combineReducers({boredReducer,dogReducer});

export default combReducer;