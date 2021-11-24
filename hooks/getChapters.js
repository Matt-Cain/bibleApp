import axios from "axios";
import React, { useState, useEffect } from "react";

export default function getChapters(book, bible) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    console.log("get Chapter hook", book, bible);
    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/${bible}/books/${book}/chapters`,
        {
          headers: {
            "api-key": "fb45b9a22e03b27405b1ec9b8f339a97", //the token is a variable which holds the token
          },
        }
      )
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [book, bible]);
  return response.data;
}
