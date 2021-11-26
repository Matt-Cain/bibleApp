import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import getPassages from "../hooks/getPassages";

export default function PassagePage({ passage, setView }) {
  const [selectedPassageId, setSelectedPassageId] = React.useState(null);

  const data = getPassages(passage);

  const renderItem = ({ item, index }) => <Item index={index} item={item} />;

  const Item = ({ item, index }) => (
    <View
      style={[styles.item, index === selectedPassageId ? styles.selected : ""]}
    >
      <TouchableOpacity
        onPress={() => {
          setSelectedPassageId(index);
          // setView("book-page");
        }}
      >
        <Text style={styles.title}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );

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
