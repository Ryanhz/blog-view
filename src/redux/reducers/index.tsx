import { combineReducers } from 'redux';
import { enthusiasm } from "./dome";

const rootReducer = combineReducers({
  dome: enthusiasm
});

export default rootReducer;