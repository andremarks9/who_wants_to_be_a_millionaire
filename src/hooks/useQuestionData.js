import axios from "axios";
import { useEffect, useState } from "react";

export const useQuestionData = (url, indexQuestions) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${url}${indexQuestions}`)
      .then(({ data }) => setData(data.data))
      .catch((error) => console.log(error.message));
  }, [url, indexQuestions]);
  return data;
};
