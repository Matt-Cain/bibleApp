import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeProvider";

const FavoritesScreen = () => {
  const { colors, isDark } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Favorite Screen</Text>
      <Button title="Click Me" onPress={() => alert("Clicked")} />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
