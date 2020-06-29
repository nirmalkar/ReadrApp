import React from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/Landing";
import AddBook from "../pages/AddBook";
import Book from "../pages/Book";
import BookList from "../pages/BookList";

const Routes = () => {
  return (
    <>
      <Route path="/addbook" component={AddBook} />
      <Route exact path="/books" component={BookList} />
      <Route exact path="/book/:id" component={Book} />
      <Route exact path="/" component={Landing} />
    </>
  );
};

export default Routes;
