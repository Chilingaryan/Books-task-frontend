import { BOOKS_TYPES } from "../types";
import MOCK_DATA from "_db/books.json";
import { sleep } from "helpers/sleep";

export const getBooks = () => async (dispatch) => {
  dispatch({ type: BOOKS_TYPES.GET_BOOKS_REQUEST });
  await sleep();
  dispatch({
    type: BOOKS_TYPES.GET_BOOKS_SUCCESS,
    payload: MOCK_DATA,
  });
};

export const orderBooks = (dragIndex, hoverIndex) => async (dispatch) => {
  // Note: Backend update api can be written here
  dispatch({
    type: BOOKS_TYPES.ORDER_BOOKS,
    payload: {
      dragIndex,
      hoverIndex,
    },
  });
};

export const deleteBook = (index) => (dispatch) => {
  dispatch({
    type: BOOKS_TYPES.DELETE_BOOK,
    index,
  });
};
