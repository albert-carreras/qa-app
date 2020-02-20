import React from "react";
import { Provider } from "react-redux";
import Main from "pages/Main";

const App = ({ store }: any) => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
