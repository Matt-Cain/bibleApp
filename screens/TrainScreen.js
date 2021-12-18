import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Voice from "@react-native-voice/voice";
import { useTheme } from "../context/ThemeProvider";
import CardFlip from "react-native-card-flip";

// import getSimilarWords from "../hooks/getSimilarWords";
import getCorrectList from "../hooks/getCorrectList";

const TrainScreen = ({ route, navigation }) => {
  const [isTraining, setIsTraining] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  const [spokenWords, setSpokenWords] = useState("");

  const { colors } = useTheme();
  const { item } = route.params;
  const card = useRef(null);

  const array = new Array(7).fill(false);

  const verseArray = item.text.split(" ");

  const list = getCorrectList(spokenWords, item.text);
  console.log("List", list);

  const onSpeechStart = (event) => {
    console.log("onSpeechStart");
    setSpokenWords("");
  };
  const onSpeechEnd = () => {
    setIsRecord(false);
    console.log("onSpeechEnd");
  };
  const onSpeechResults = (event) => {
    console.log(" onSpeechResults", event);
    console.log("onSpeechResults");
    setSpokenWords(event.value[0]);
  };
  const onSpeechError = (event) => {
    console.log("onSpeechError");
    console.log(event.error);
  };
  const onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
      setModalVisible(!modalVisible);
    } else {
      Voice.start("en-US"); // languages code e.g 'en-US'
    }
    setIsRecord(!isRecord);
  };
  const onSpeechPartialResults = (event) => {
    setSpokenWords(event.value[0]);
  };
  const onSpeechVolumeChanged = (event) => {
    //console.log('onSpeechVolumeChanged 3333');
    //console.log(event.value);
  };

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <CardFlip style={styles.textContainer} ref={card}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.textContainer1}
          onPress={() => card.current.flip()}
        >
          <View style={styles.info}>
            <Text style={styles.title}>{item.book} </Text>
            <Text style={styles.title}>{item.chapter}:</Text>
            <Text style={styles.title}>{item.verse} </Text>
          </View>
          <Text style={styles.bibleText}>{item.text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.textContainer1}
          onPress={() => card.current.flip()}
        >
          <View style={styles.info}>
            <Text style={styles.title}>{item.book} </Text>
            <Text style={styles.title}>{item.chapter}:</Text>
            <Text style={styles.title}>{item.verse} </Text>
          </View>
          <Text style={styles.bibleText}>
            {list.map((m, i) => {
              return (
                <Text
                  key={i}
                  style={m ? styles.trainTextTrue : styles.trainTextFalse}
                >
                  {verseArray[i] + " "}
                </Text>
              );
            })}
          </Text>
        </TouchableOpacity>
      </CardFlip>
      <TouchableOpacity
        style={styles.trainButton}
        onPress={() => {
          card.current.flip();
          setIsTraining((prevState) => (prevState = !prevState));
          setSpokenWords("");
          Voice.stop();
          !isTraining && onRecordVoice();
        }}
      >
        <Text style={{ color: "#64ffda", fontWeight: "bold" }}>
          {isTraining ? "STOP" : "TRAIN"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrainScreen;

const styles = StyleSheet.create({
  bibleText: {
    fontSize: 20,
    color: "white",
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
  },
  textContainer: {
    position: "absolute",
    top: 80,
    left: 20,
    right: 20,
    bottom: 400,
    padding: 30,
  },
  textContainer1: {
    padding: 30,
    flex: 1,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#64ffda",
  },
  trainTextTrue: { fontSize: 20, color: "white" },
  trainTextFalse: { fontSize: 20, color: "red" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#64ffda",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  trainButton: {
    position: "absolute",
    alignSelf: "center",
    bottom: "30%",
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
});
