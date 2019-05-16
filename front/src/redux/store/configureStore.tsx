import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../sagas";

const sagaMiddleware = createSagaMiddleware();
let storeEnhancers = compose(applyMiddleware(sagaMiddleware));

export default function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, storeEnhancers)
  sagaMiddleware.run(rootSaga)
  return store;
}