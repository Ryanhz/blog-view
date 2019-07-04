import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import { global, globalState } from "./global";
import { front, frontState } from "./front";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas"

import { BaseState } from "./storeMix";

export default function configureStore(state: BaseState = initState) {
  const store = createStore(reducers, state, storeEnhancers)
  sagaMiddleware.run(rootSaga)
  return store;
}

const sagaMiddleware = createSagaMiddleware();
let storeEnhancers = compose(applyMiddleware(sagaMiddleware));

//================================== reducers
let reducers = combineReducers({
  globalState: global,
  frontState: front,
});

//=================================== state 
let initState: BaseState = {
  globalState: globalState,
  frontState: frontState,
}
