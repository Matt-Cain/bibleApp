import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        </ThemeProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};
export default App;
