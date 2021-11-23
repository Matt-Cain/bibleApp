import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useTheme } from "../context/ThemeProvider";
import useBible from "../hooks/getBible";
import BookList from "../components/BookList";

export default function SearchScreen() {
  const { colors, isDark } = useTheme();
  const data = useBible();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <BookList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
  },
});
