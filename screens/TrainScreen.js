import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeProvider";
import { Toggle } from "../components/Toggle";

const TrainScreen = ({ route, navigation }) => {
  const { colors, isDark } = useTheme();
  const { item } = route.params;
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text>{item.text}</Text>
    </View>
  );
};

export default TrainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
