import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import getData from "../hooks/getData";

export default function ChapterList({ setView, setChapter, book }) {
  const url = `https://api.scripture.api.bible/v1/bibles/01b29f4b342acc35-01/books/${book}/chapters`;
  const data = getData(url, true);
  const renderItem = ({ item, index }) => <Item index={index} item={item} />;
  const Item = ({ item, index }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          setChapter(item.reference);
          setView("passage-page");
        }}
      >
        {!index ? (
          <Text style={[styles.title, { textAlign: "center" }]}>
            -- {item.reference} --
          </Text>
        ) : (
          <Text style={styles.title}>Chapter {index}</Text>
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
    backgroundColor: "white",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    color: "#121212",
  },
});
