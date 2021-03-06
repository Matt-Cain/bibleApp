import { v4 as uuid } from "uuid";

export const scriptureReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_STATE":
      return action.data;

    case "ADD_SCRIPTURE":
      return {
        bookmarkList: [...state.bookmarkList.filter((f) => f !== undefined)],
        scriptureList: [
          ...state.scriptureList.filter((f) => f !== undefined),
          action.scripture,
        ],
      };
    case "REMOVE_SCRIPTURE":
      return {
        bookmarkList: [...state.bookmarkList.filter((f) => f !== undefined)],
        scriptureList: [
          ...state.scriptureList.filter((f) => f.id !== action.payload.id),
        ],
      };
    case "ADD_TO_BOOKMARK_LIST":
      return {
        bookmarkList: [...state.bookmarkList, action.payload],
        scriptureList: [...state.scriptureList],
      };

    case "REMOVE_FROM_BOOKMARK_LIST":
      return {
        bookmarkList: [
          ...state.bookmarkList.filter((f) => f.id !== action.payload.id),
        ],
        scriptureList: [...state.scriptureList],
      };
    default:
      return state;
  }
};
