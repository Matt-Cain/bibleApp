import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useTheme } from "../context/ThemeProvider";
import getBooks from "../hooks/getBooks";
import BookList from "../components/BookList";
import ChapterList from "../components/ChapterList";
import PassagePage from "../components/PassagePage";
import { ScriptureContext } from "../context/ScriptureContext";

export default function SearchScreen() {
  const [bible] = useState("01b29f4b342acc35-01");
  const [book, setBook] = useState("GEN");
  const [chapter, setChapter] = useState("Genesis 1");
  const [setPassage] = useState("Genesis+1");
  const [setText] = useState("");
  const [view, setView] = useState("book-page");
  const { colors } = useTheme();
  const bookData = getBooks();

  switch (view) {
    case "book-page":
      return (
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <BookList
            colors={colors}
            setView={setView}
            setBook={setBook}
            data={bookData}
          />
        </View>
      );
    case "chapter-page":
      return (
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <ChapterList
            colors={colors}
            setView={setView}
            book={book}
            setChapter={setChapter}
            bible={bible}
          />
        </View>
      );
    case "passage-page":
      return (
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <PassagePage
            colors={colors}
            passage={chapter}
            setPassage={setPassage}
            setText={setText}
            setView={setView}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
  },
});
