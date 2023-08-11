import axios from "axios";
import { useEffect, useState } from "react";

export const useAllQuestions = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => setData(data))
      .catch((error) => setError(error.message));
  }, []);
  return { data, error };
};
