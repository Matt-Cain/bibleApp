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
  const data = getPassages(passage);
  const renderItem = ({ item }) => <Item item={item} />;
  const Item = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          setView("book-page");
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
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});
