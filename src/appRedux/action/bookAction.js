import {
  SAVE_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
} from "../../constant/actionTypes/bookActionTypes";

const saveBook = (data) => (dispatch) => {
  dispatch({ type: SAVE_BOOK, payload: data });
};
const updateBook = (data) => (dispatch) => {
  dispatch({ type: UPDATE_BOOK, id: data.id, payload: data });
};
const deleteBook = (id) => (dispatch) => {
  dispatch({ type: DELETE_BOOK, payload: id });
};

export { saveBook, updateBook, deleteBook };
