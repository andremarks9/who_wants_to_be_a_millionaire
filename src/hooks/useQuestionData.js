import axios from "axios";
import { useEffect, useState } from "react";

export const useQuestionData = (url, indexQuestions) => {
  const [data, setData] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`${url}${indexQuestions}`)
      .then(({ data }) => setData(data.data.attributes))
      .catch((error) => setError(error.message));
  }, [url, indexQuestions]);
  return { data, error };
};
