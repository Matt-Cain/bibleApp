import axios from "axios";
import React, { useState, useEffect } from "react";

export default function getSimilarWords(text) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    const data = text.split(" ");
    const wordArray = [];

    data.forEach((word) => {
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
    setResponse(wordArray);
  };

  useEffect(() => {
    fetchData();
  }, [text]);
  return response;
}
