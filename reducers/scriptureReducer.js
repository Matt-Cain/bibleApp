import { v4 as uuid } from "uuid";

const initialState = {
  books: [],
  bookmarks: [],
};

export const scriptureReducer = (state = { book }, action) => {
  switch (action.type) {
    case "ADD_SCRIPTURE":
      return [
        ...state,
        {
          book: action.scripture.book,
          chapter: action.scripture.chapter,
          verse: action.scripture.verse,
          text: action.scripture.text,
        },
      ];
    case "REMOVE_SCRIPTURE":
      return state.filter((scripture) => scripture.id !== action.id);
    default:
      return state;
  }
};
