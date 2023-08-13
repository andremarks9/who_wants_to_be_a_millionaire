import axios from "axios";
import { useEffect, useState } from "react";

export const useAllQuestions = (url) => {
  const [questionsList, setQuestionsList] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => setQuestionsList(data.data))
      .catch((error) => console.log(error.message));
  }, [url]);
  return questionsList;
};
