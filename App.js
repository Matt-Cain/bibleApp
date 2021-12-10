import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "./context/ThemeProvider";
import { NavButtonProvider } from "./context/NavButtonContext";
// import ScriptureContextProvider from "./context/ScriptureContext";
import { store, persistor } from "./redux/store";

const App = () => {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <ThemeProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <NavButtonProvider>
                {/* <ScriptureContextProvider> */}
                <NavigationContainer>
                  <Tabs />
                </NavigationContainer>
                {/* </ScriptureContextProvider> */}
              </NavButtonProvider>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};
export default App;
