import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "./context/ThemeProvider";
import { NavButtonProvider } from "./context/NavButtonContext";
import ScriptureContextProvider from "./context/ScriptureContext";
const App = () => {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <ThemeProvider>
          <NavButtonProvider>
            <ScriptureContextProvider>
              <NavigationContainer>
                <Tabs />
              </NavigationContainer>
            </ScriptureContextProvider>
          </NavButtonProvider>
        </ThemeProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};
export default App;
