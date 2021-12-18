import { useState, useEffect } from "react";
import getSimilarWords from "../hooks/getSimilarWords";

export default function getCorrectList(spokenWords, text) {
  const [response, setResponse] = useState([]);

  const similarWords = getSimilarWords(text);

  const spokenArray = spokenWords.toLowerCase().split(" ");
  console.log("spokenArray", spokenArray);

  let isCorrectList = new Array(spokenArray.length).fill(false);

  const isCorrect = () => {
    for (let i = 0; i < spokenArray.length; i++) {
      for (let j = 0; j < similarWords[i].length; j++) {
        if (spokenArray[i] === similarWords[i][j].word) {
          isCorrectList[i] = true;
          break;
        }
      }
    }
    setResponse(isCorrectList);
  };

  useEffect(() => {
    if (similarWords !== undefined && similarWords.length > 0) {
      isCorrect();
    }
  }, [spokenWords]);
  return response;
}
