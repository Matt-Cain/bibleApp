import React, { createContext, useReducer, useEffect } from "react";
import { scriptureReducer } from "../reducers/scriptureReducer";
import AsyncStorage from "@react-native-community/async-storage";

const initialState = {
  scriptureList: [],
  bookmarkList: [],
};

const getScriptures = async () => {
  try {
    const data = await AsyncStorage.getItem("books");
    return data ? JSON.parse(data) : {};
  } catch (e) {}
};

export const ScriptureContext = createContext();

const ScriptureContextProvider = (props) => {
  const [scripture, dispatch] = useReducer(scriptureReducer, initialState);
  const { scriptureList } = scripture;

  // Loading initial Satte
  useEffect(() => {
    async function fetchInitialState() {
      const data = await getScriptures();
      dispatch({ type: "SET_INITIAL_STATE", data });
    }
    fetchInitialState();
  }, []);

  // Update AsyncStorage when user is updated
  useEffect(() => {
    // This check is required to avoid initial writing to asyncStorage
    clearAll = async () => {
      try {
        await AsyncStorage.clear();
      } catch (e) {
        // clear error
      }
    };
    if (scriptureList) {
      AsyncStorage.setItem("books", JSON.stringify(scripture));
    }
    // clearAll();
  }, [scriptureList]);

  return (
    <ScriptureContext.Provider value={{ scripture, dispatch }}>
      {props.children}
    </ScriptureContext.Provider>
  );
};

export default ScriptureContextProvider;
