import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./redux/store/configureStore";
import Hello from "./redux/containers/hello";

const store = configureStore();
const rootElement = document.getElementById('root') as HTMLElement


store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
  <Provider store={store} >
    <Hello />
  </Provider>,
  rootElement
);

