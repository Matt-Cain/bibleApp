import axios from "axios";
import React, { useState, useEffect } from "react";

export default function getSimilarWords(text) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    const verseArray = text.toLowerCase().split(" ");
    const verseArrayWithoutSymbols = verseArray.map((w) =>
      w.replace(/[^a-zA-Z]+/g, "")
    );

    let wordArray = new Array(verseArray.length);

    verseArrayWithoutSymbols.forEach((word, i) => {
      axios
        .get(`http://api.datamuse.com/words?sl=${word}`)
        .then((res) => {
          wordArray[i] = res.data;
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    });
    setResponse(wordArray);
  };

  useEffect(() => {
    fetchData();
  }, [text]);
  return response;
}
