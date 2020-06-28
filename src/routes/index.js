import React from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/Landing";
import AddBook from "../pages/AddBook";
import Admin from "../pages/Admin";

const Routes = () => {
  return (
    <>
      <Route exact path="/addbook" component={AddBook} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/" component={Landing} />
    </>
  );
};

export default Routes;
