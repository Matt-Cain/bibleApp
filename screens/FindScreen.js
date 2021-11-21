import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const FindScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Find Screen</Text>
      <Button title="Click Me" onPress={() => alert("Clicked")} />
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
