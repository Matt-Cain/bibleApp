import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeProvider";
import { Toggle } from "../components/Toggle";

const PostScreen = () => {
  const { colors, isDark } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text>Post Screen</Text>
      <Toggle style={{ margin: 50 }} />
      <Button
        style={{ marginVertical: 50 }}
        title="Click Me"
        onPress={() => alert("Clicked")}
      />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
