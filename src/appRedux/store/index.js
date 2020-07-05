import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bookListReducer } from "../reducer/bookReducer";
import { bookSearchReducer } from "../reducer/searchReducer";

const initialState = {};
const reducer = combineReducers({
  bookList: bookListReducer,
  bookSearch: bookSearchReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
