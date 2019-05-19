import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../sagas";
import { globalState, frontState, initState } from "./initState";

const sagaMiddleware = createSagaMiddleware();
let storeEnhancers = compose(applyMiddleware(sagaMiddleware));

export default function configureStore(state :any = initState) {
  const store = createStore(reducers, state, storeEnhancers)
  sagaMiddleware.run(rootSaga)
  return store;
}