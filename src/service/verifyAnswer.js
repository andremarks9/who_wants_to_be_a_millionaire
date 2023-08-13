import axios from "axios";

const verifyAnswer = (url, data, answer, setIsCorrect, setScore, score) => {
  axios
    .get(`${url}correctAnswer/${data.id}`, {
      params: { answer: answer },
    })
    .then(({ data }) => {
      if (data === true) {
        setIsCorrect(data);
        setScore(score + 1);
      } else {
        setIsCorrect(data);
      }
    })
    .catch((error) => console.log(error.message));
};

export default verifyAnswer;
