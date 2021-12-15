import { useState, useEffect } from "react";

export default function getCorrectList(verse, similarWords, spoken) {
  const [response, setResponse] = useState(["hello"]);

  let isCorrectList = new Array(spoken.length).fill(false);

  const isCorrect = () => {
    // for (let i = 0; i < spoken.length; i++) {
    //   for (let j = 0; j < wordsArray[i].length; j++) {
    //     if (spoken[i] === wordsArray[i][j].word) {
    //       console.log("hello", wordsArray[i][j].word);
    //       isCorrectList[i] = true;
    //     }
    //   }
    // }
    // setResponse(isCorrectList);
    console.log("yes", verse, similarWords, "spoken", spoken);
  };

  useEffect(() => {
    isCorrect();
  }, [spoken]);
  return response;
}
