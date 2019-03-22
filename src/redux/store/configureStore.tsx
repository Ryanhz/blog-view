import { createStore } from 'redux';
import reducers from '../reducers/index';
import initState from './initState';
export default function () {
  const store = createStore(reducers, initState);
  return store;
}