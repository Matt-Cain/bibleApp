import React, { createContext, useReducer, useEffect } from "react";
import { scriptureReducer } from "../reducers/scriptureReducer";
import AsyncStorage from "@react-native-community/async-storage";

export const ScriptureContext = createContext();

const ScriptureContextProvider = (props) => {
  const [scriptures, dispatch] = useReducer(scriptureReducer, [], () => {
    const data = AsyncStorage.getItem("scriptures");
    return data ? data : [];
  });
  console.log(scriptures);
  useEffect(() => {
    AsyncStorage.setItem("scriptures", JSON.stringify(scriptures));
  }, [scriptures]);
  return (
    <ScriptureContext.Provider value={{ scriptures, dispatch }}>
      {props.children}
    </ScriptureContext.Provider>
  );
};

export default ScriptureContextProvider;
