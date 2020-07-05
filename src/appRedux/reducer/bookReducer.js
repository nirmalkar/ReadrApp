import {
  SAVE_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
} from "../../constant/actionTypes/bookActionTypes";
import { bookData } from "../../Data";
function bookListReducer(state = { books: bookData }, action) {
  switch (action.type) {
    case SAVE_BOOK:
      return { books: [...state.books, action.payload] };
    case DELETE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case UPDATE_BOOK:
      return {
        books: state.books.map((book) =>
          action.id === book.id ? action.payload : book
        ),
      };
    default:
      return state;
  }
}
export { bookListReducer };
