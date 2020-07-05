import { SEARCH_BOOK } from "../../constant/actionTypes/searchActionsTypes";

function bookSearchReducer(state = { bookSearch: "" }, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      return { bookSearch: action.payload };
    default:
      return state;
  }
}
export { bookSearchReducer };
