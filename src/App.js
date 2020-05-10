import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyContent from "./pages/MyContent";
import NotFound from "./pages/NotFound";
import "./index.css";

const App = () => {
  return (
      <Switch>
        <Route exact={true} path="/" component={Home}></Route>
        <Route exact={true} path="/my-content" component={MyContent}></Route>
        <Route exact={true} path="*" component={NotFound}></Route>
      </Switch>
  );
};

export default App;
