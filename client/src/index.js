import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialstate = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
