import { useState, useEffect } from "react";

export default function getCorrectList(similarWords, spokenWords) {
  const [response, setResponse] = useState(["hello"]);

  const spokenArray = spokenWords.split(" ");
  console.log("similarWords", similarWords);
  let isCorrectList = new Array(spokenArray.length).fill(false);

  console.log("spoken24", spokenArray);
  const isCorrect = () => {
    console.log("spokenArrayLength", spokenArray.length);
    for (let i = 0; i < spokenArray.length; i++) {
      for (let j = 0; j < similarWords[i].length; j++) {
        console.log("spoken", spokenArray, "similiar", similarWords[i][j].word);
        if (spokenArray[i] === similarWords[i][j].word) {
          isCorrectList[i] = true;
        }
      }
      // console.log("deap help", spoken[i], verseWithoutSymbols[i]);
      // if (spokenArray[i] === verseWithoutSymbols[i]) {
      //   isCorrectList[i] = true;
      // }
    }
    setResponse(isCorrectList);
    // console.log("yes", verse, similarWords, "spoken", spoken);
  };

  useEffect(() => {
    if (similarWords !== undefined && similarWords.length) {
      isCorrect();
    } else return;
  }, [spokenWords]);
  return response;
}
