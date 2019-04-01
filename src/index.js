import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from "./store";
import { UserInfo, TodosList } from "./components";

const App = () => (
  <ContextProvider>
    <Fragment>
      <UserInfo />
      <TodosList />
    </Fragment>
  </ContextProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
