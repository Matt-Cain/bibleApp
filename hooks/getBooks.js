import axios from "axios";
import React, { useState, useEffect } from "react";

export default function getBooks() {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [bible, setBible] = useState("01b29f4b342acc35-01");
  const [book, setBook] = useState("Genesis");

  const fetchData = () => {
    axios
      .get(`https://api.scripture.api.bible/v1/bibles/${bible}/books`, {
        headers: {
          "api-key": "fb45b9a22e03b27405b1ec9b8f339a97", //the token is a variable which holds the token
        },
      })
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
  }, []);
  return response.data;
}
