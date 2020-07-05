import { SEARCH_BOOK } from "../../constant/actionTypes/searchActionsTypes";

const searchBook = (data) => (dispatch) => {
  dispatch({ type: SEARCH_BOOK, payload: data });
};

export { searchBook };
