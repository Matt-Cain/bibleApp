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

    const wordArray = [];

    verseArrayWithoutSymbols.forEach((word) => {
      axios
        .get(`http://api.datamuse.com/words?sl=${word}`)
        .then((res) => {
          wordArray.push(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    });
    console.log("wordArray", wordArray);
    setResponse(wordArray);
  };

  useEffect(() => {
    fetchData();
  }, [text]);
  return response;
}
