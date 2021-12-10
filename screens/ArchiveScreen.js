import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useTheme } from "../context/ThemeProvider";
import { useIsFocused } from "@react-navigation/native";
import { NavButtonContext } from "../context/NavButtonContext";
import { ScriptureContext } from "../context/ScriptureContext";

const ArchiveScreen = () => {
  const sData = [
    {
      book: "John",
      chapter: "1",
      verse: "1",
      text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    },
    {
      book: "John",
      chapter: "1",
      verse: "1",
      text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    },
  ];

  const { scripture } = useContext(ScriptureContext);
  const { scriptureList, bookmarkList } = scripture;
  console.log("Archive screen scripture list data", scriptureList);
  console.log("JSON", scripture);

  const { colors, isDark } = useTheme();
  const [data, setData] = React.useState("blank");
  const isFocused = useIsFocused();

  const [navButtonState, setNavButtonState] =
    React.useContext(NavButtonContext);

  const renderItem = ({ item, index }) => <Item index={index} item={item} />;

  const Item = ({ item, index }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          // setSelectedPassageId(index);
          // setPassageText(item.text);
          // setView("book-page");
        }}
      >
        <View style={styles.passage}>
          <Text style={styles.title}>{item.book}</Text>
          <Text style={styles.title}>{item.chapter}</Text>
          <Text style={styles.title}>{item.verse}</Text>
          <Text style={styles.title}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  // if (navButtonState === true && selectedPassageId !== null && isFocused) {
  //   storeData(passageText.toString());
  //   alert(selectedPassageId);
  //   setNavButtonState(false);
  // }

  return (
    <View style={styles.container}>
      {scriptureList ? (
        <FlatList
          data={scriptureList}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      ) : (
        <View>
          <Text>hello</Text>
        </View>
      )}
    </View>
  );
};

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
  passage: {
    backgroundColor: "#121212",
  },
});

export default ArchiveScreen;
