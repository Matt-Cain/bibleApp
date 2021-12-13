import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { useTheme } from "../context/ThemeProvider";
import { useIsFocused } from "@react-navigation/native";
import { NavButtonContext } from "../context/NavButtonContext";
import { ScriptureContext } from "../context/ScriptureContext";

const ArchiveScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const { scripture, dispatch } = useContext(ScriptureContext);
  const { scriptureList, bookmarkList } = scripture;
  console.log("Archive screen scripture list data", scriptureList);
  console.log("JSON", scripture);

  const { colors, isDark } = useTheme();
  const [data, setData] = React.useState("blank");
  const isFocused = useIsFocused();

  const [navButtonState, setNavButtonState] =
    React.useContext(NavButtonContext);

  var stringTruncate = function (str, length) {
    var dots = str.length > length ? "..." : "";
    return str.substring(0, length) + dots;
  };
  const handleAddBookmark = (book) => {
    dispatch({
      type: "ADD_TO_BOOKMARK_LIST",
      payload: book,
    });
  };

  const handleRemoveBookmark = (book) => {
    dispatch({
      type: "REMOVE_FROM_BOOKMARK_LIST",
      payload: book,
    });
  };

  const ifExists = (book) => {
    if (bookmarkList.filter((item) => item.id === book.id).length > 0) {
      return true;
    }

    return false;
  };

  const renderItem = ({ item, index }) => <Item index={index} item={item} />;

  const Item = ({ item, index }) => (
    <View style={[styles.item, index === currentIndex ? styles.selected : ""]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCurrentIndex(index === currentIndex ? null : index);
        }}
      >
        <View style={styles.passage}>
          <View style={styles.info}>
            <Text style={styles.title}>{item.book} </Text>
            <Text style={styles.title}>{item.chapter}:</Text>
            <Text style={styles.title}>{item.verse} </Text>
          </View>
          <Text style={styles.text}>
            {index === currentIndex ? item.text : stringTruncate(item.text, 60)}
          </Text>
          <View style={styles.options}>
            <TouchableOpacity
              onPress={() =>
                ifExists(item)
                  ? handleRemoveBookmark(item)
                  : handleAddBookmark(item)
              }
              activeOpacity={0.7}
            >
              <Icon
                color="#64ffda"
                size={20}
                name={!ifExists(item) ? "star-outline" : "star"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                dispatch({ type: "REMOVE_SCRIPTURE", payload: item })
              }
              activeOpacity={0.7}
            >
              <Icon
                style={{ paddingLeft: 10 }}
                color="#64ffda"
                // color={ifExists(item) ? "white" : "#64ffda"}
                size={20}
                name="trash"
              />
            </TouchableOpacity>
          </View>
        </View>
        {index === currentIndex && (
          <View style={styles.trainButtonContainer}>
            <TouchableOpacity
              style={styles.trainButton}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate("Train", { item: item });
              }}
            >
              <Text style={{ color: "#64ffda", fontWeight: "bold" }}>
                TRAIN
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );

  // if (navButtonState === true && selectedPassageId !== null && isFocused) {
  //   storeData(passageText.toString());
  //   alert(selectedPassageId);
  //   setNavButtonState(false);
  // }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.subContainer}>
        {scriptureList ? (
          <FlatList
            data={scriptureList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View>
            <Text>hello</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
  trainButton: {
    borderColor: "#64ffda",

    // height: 250,
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  trainButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    padding: 10,
    paddingBottom: -10,
  },
  subContainer: {
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
    backgroundColor: "#2d2d2d",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#64ffda",
  },
  selected: {
    borderColor: "#64ffda",
    height: 250,
    borderWidth: 3,
  },
  passage: {},
  text: {
    color: "white",
    fontSize: 18,
    padding: 10,
  },
  options: {
    flexDirection: "row",
    paddingLeft: 10,
  },
});

export default ArchiveScreen;
