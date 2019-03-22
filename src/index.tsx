import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import route from "./routers"

import configureStore from "./redux/store/configureStore";

const store = configureStore();
const rootElement = document.getElementById('root') as HTMLElement


store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
  <Provider store={store} >
    {route}
  </Provider>,
  rootElement
);

