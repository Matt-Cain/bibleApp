import { useState, useEffect } from "react";

export default function getCorrectList(verse, similarWords, spoken) {
  const [response, setResponse] = useState(["hello"]);

  const spokenArray = spoken.split(" ");

  console.log("props", verse, similarWords, spoken);
  let isCorrectList = new Array(spokenArray.length).fill(false);
  const verseArray = verse.toLowerCase().split(" ");
  const verseWithoutSymbols = verseArray.map((w) =>
    w.replace(/[^a-zA-Z]+/g, "")
  );
  console.log("spoken24", spokenArray);
  const isCorrect = () => {
    console.log(spokenArray.length);
    for (let i = 0; i < spokenArray.length; i++) {
      // for (let j = 0; j < similarWords[i].length; j++) {
      //   console.log("spoken", spokenArray, "similiar", similarWords[i][j].word);
      //   if (spokenArray[i] === similarWords[i][j].word) {
      //     isCorrectList[i] = true;
      //   }
      // }
      console.log("deap help", spoken[i], verseWithoutSymbols[i]);
      if (spokenArray[i] === verseWithoutSymbols[i]) {
        isCorrectList[i] = true;
      }
    }
    setResponse(isCorrectList);
    // console.log("yes", verse, similarWords, "spoken", spoken);
  };

  useEffect(() => {
    isCorrect();
  }, [spoken]);
  return response;
}
