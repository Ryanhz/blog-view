import { combineReducers } from 'redux';
import { global } from "./global";
import { front } from "./front";

export default combineReducers({
  global,
  front,
});
