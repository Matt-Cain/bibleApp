import { useState, useEffect } from "react";
import getSimilarWords from "../hooks/getSimilarWords";

import { cleanSpokenWords } from "../hooks/methods/correctListMethods";

export default function getCorrectList(spokenWords, text) {
  const [response, setResponse] = useState([]);

  const similarWords = getSimilarWords(text);

  const spoken = cleanSpokenWords(spokenWords);

  // for (let i = 0; i < spokenArray.length; i++) {
  //   if (spokenArray[i]) {
  //   }
  // }

  let isCorrectList = new Array(spoken.length).fill(false);

  const isCorrect = () => {
    for (let i = 0; i < spoken.length; i++) {
      for (let j = 0; j < similarWords[i].length; j++) {
        if (spoken[i] === similarWords[i][j].word) {
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
