import axios from "axios";
import { useState, useEffect } from "react";

export default function getData(url, hasHeader) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios
      .get(
        url,
        hasHeader
          ? {
              headers: {
                "api-key": "fb45b9a22e03b27405b1ec9b8f339a97", //the token is a variable which holds the token
              },
            }
          : ""
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
  }, [url]);
  return hasHeader ? response.data : response;
}
