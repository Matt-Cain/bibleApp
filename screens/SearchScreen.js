import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useTheme } from "../context/ThemeProvider";
import getBooks from "../hooks/getBooks";
import BookList from "../components/BookList";
import ChapterList from "../components/ChapterList";
import PassagePage from "../components/PassagePage";

export default function SearchScreen() {
  const [bible, setBible] = useState("01b29f4b342acc35-01");
  const [book, setBook] = useState("GEN");
  const [chapter, setChapter] = useState("Genesis 1");
  const [passage, setPassage] = useState("Genesis+1");
  const [view, setView] = useState("book-page");
  const { colors, isDark } = useTheme();
  const bookData = getBooks();

  switch (view) {
    case "book-page":
      return (
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <BookList setView={setView} setBook={setBook} data={bookData} />
        </View>
      );
    case "chapter-page":
      return (
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <ChapterList
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
            passage={chapter}
            setPassage={setPassage}
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
