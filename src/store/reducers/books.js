import { BOOKS_TYPES } from "../types";

const initialState = {
  booksData: [],
  isBooksLoading: true,
};

export const books = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_TYPES.GET_BOOKS_REQUEST:
      return {
        ...state,
        booksData: [],
        isBooksLoading: true,
      };
    case BOOKS_TYPES.GET_BOOKS_SUCCESS:
      return {
        ...state,
        booksData: action.payload,
        isBooksLoading: false,
      };
    case BOOKS_TYPES.ORDER_BOOKS:
      const booksDataCopy = [...state.booksData];
      const { dragIndex, hoverIndex } = action.payload;
      booksDataCopy[dragIndex] = state.booksData[hoverIndex];
      booksDataCopy[hoverIndex] = state.booksData[dragIndex];
      return {
        ...state,
        booksData: booksDataCopy,
      };
    case BOOKS_TYPES.DELETE_BOOK:
      return {
        ...state,
        booksData: [
          ...state.booksData.slice(0, action.index),
          ...state.booksData.slice(action.index + 1, state.booksData.length),
        ],
      };
    default:
      return state;
  }
};
