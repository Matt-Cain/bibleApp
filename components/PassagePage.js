import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import uuid from "react-native-uuid";

import { useIsFocused } from "@react-navigation/native";

import getData from "../hooks/getData";
import { NavButtonContext } from "../context/NavButtonContext";
import { ScriptureContext } from "../context/ScriptureContext";

export default function PassagePage({ passage, setView }) {
  const { dispatch } = useContext(ScriptureContext);
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
  const param = passage.replace(" ", "+");
  const url = `http://labs.bible.org/api/?passage=${param}&type=json`;
  const data = getData(url, false);
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
          // setScriptureObject(item);
          setBook(item.bookname);
          setChapter(item.chapter);
          setVerse(item.verse);
          setText(item.text);
        }}
      >
        <Text style={styles.title}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );

  if (navButtonState === true && selectedPassageId !== null && isFocused) {
    dispatch({
      type: "ADD_SCRIPTURE",
      scripture: {
        book,
        chapter,
        verse,
        text,
        id: uuid.v1(),
      },
    });
    setNavButtonState(false);
    setView("book-page");
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
