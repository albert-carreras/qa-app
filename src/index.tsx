import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./state";
import rootSaga from "./sagas";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

const sagaMiddleware = createSagaMiddleware({
  onError: error => {
    console.error(error);
    sagaMiddleware.run(rootSaga);
  }
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<App store={store} />, document.getElementById("root"));

serviceWorker.unregister();
