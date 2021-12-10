import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import {
  getBooks,
  addBookmark,
  removeBookmark,
  addBook,
} from "../redux/actions";

import { useIsFocused } from "@react-navigation/native";

import getPassages from "../hooks/getPassages";
import { NavButtonContext } from "../context/NavButtonContext";
// import { ScriptureContext } from "../context/ScriptureContext";

export default function PassagePage({ passage, setView }) {
  const dispatch = useDispatch();

  const addBookToList = (book) => dispatch(addBook(book));

  const handleAddBook = (book) => {
    console.log("handleAddBook", book);
    addBookToList(book);
  };

  const addToBookmarkList = (book) => dispatch(addBookmark(book));

  // const { dispatch } = useContext(ScriptureContext);
  const [selectedPassageId, setSelectedPassageId] = React.useState(null);
  const [passageState, setPassageState] = React.useState("");
  const [scriptureObject, setScriptureObject] = React.useState([]);

  //new use states
  const [book, setBook] = React.useState("");
  const [chapter, setChapter] = React.useState("");
  const [verse, setVerse] = React.useState("");
  const [text, setText] = React.useState("");

  const [navButtonState, setNavButtonState] =
    React.useContext(NavButtonContext);

  const data = getPassages(passage);
  const isFocused = useIsFocused();

  const renderItem = ({ item, index }) => <Item index={index} item={item} />;

  const Item = ({ item, index }) => (
    <View
      style={[styles.item, index === selectedPassageId ? styles.selected : ""]}
    >
      <TouchableOpacity
        onPress={() => {
          setSelectedPassageId(index);
          setPassageState(item);
          setScriptureObject(item);
          // setView("book-page");
          setBook(item.bookname);
          setChapter(item.chapter);
          setVerse(item.verse);
          setText(item.text);
          console.log("newtext", text);
        }}
      >
        <Text style={styles.title}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );

  if (navButtonState === true && selectedPassageId !== null && isFocused) {
    handleAddBook(scriptureObject);
    alert(selectedPassageId);
    setNavButtonState(false);
  }

  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.verse}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 160,
    marginTop: 20,
    backgroundColor: "#121212",
    borderColor: "#64ffda",
    borderBottomWidth: 3,
    borderTopWidth: 3,
  },
  item: {
    color: "white",
    backgroundColor: "#121212",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  selected: {
    position: "relative",
    borderColor: "#64ffda",
    borderWidth: 3,
    top: -3,
    bottom: -3,
  },
});
