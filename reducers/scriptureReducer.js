import { v4 as uuid } from "uuid";

export const scriptureReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_STATE":
      console.log("add initial state data", action.data);
      return action.data;

    case "ADD_SCRIPTURE":
      console.log("add scripture data", action.scripture);
      return {
        bookmarkList: [...state.bookmarkList.filter((f) => f !== undefined)],
        scriptureList: [
          ...state.scriptureList.filter((f) => f !== undefined),
          action.scripture,
        ],
      };
    case "REMOVE_SCRIPTURE":
      return state.filter((scripture) => scripture.id !== action.id);
    default:
      return state;
  }
};
