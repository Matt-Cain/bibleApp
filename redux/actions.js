import axios from "axios";

import { BASE_URL } from "../config";

// Define action types
export const GET_BOOKS = "GET_BOOKS";
export const ADD_BOOK_TO_LIST = "ADD_BOOK_TO_LIST";
export const ADD_TO_BOOKMARK_LIST = "ADD_TO_BOOKMARK_LIST";
export const REMOVE_FROM_BOOKMARK_LIST = "REMOVE_FROM_BOOKMARK_LIST";

// Define action creators

export const getBooks = () => {
  try {
    return async (dispatch) => {
      // console.log('DATA ========>', response.data);

      dispatch({
        type: GET_BOOKS,
        payload: { bookname: "johhn", verse: "1:1", text: "this is a test" },
      });
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const addBook = (book) => (dispatch) => {
  dispatch({
    type: ADD_BOOK_TO_LIST,
    payload: book,
  });
};

export const addBookmark = (book) => (dispatch) => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book,
  });
};

export const removeBookmark = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book,
  });
};
