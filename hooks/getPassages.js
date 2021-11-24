import axios from "axios";
import React, { useState, useEffect } from "react";

export default function getPassages(passage) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios
      .get(`http://labs.bible.org/api/?passage=${passage}&type=json`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
        console.log(response);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return response;
}
