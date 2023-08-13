import "./GamePage.css";
import GamePic from "../../assets/mainPic.png";
import { useState } from "react";
import { goToResultPage } from "../../routes/coordinator";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { URL } from "../../constants/URL";
import { useQuestionData } from "../../hooks/useQuestionData";
import { useAllQuestions } from "../../hooks/useAllQuestions";
import MuiRadio from "../../component/muiRadio/MuiRadio";
import verifyAnswer from "../../service/verifyAnswer";

const GamePage = ({ setScore, score }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState();
  const navigate = useNavigate();

  const questionsList = useAllQuestions(URL);

  const data = useQuestionData(URL, questionsList[currentQuestion]?.id);

  const goToNextQuestion = (theAnswer) => {
    if (theAnswer) {
      setIsAnswered(true);
      verifyAnswer(URL, data, theAnswer, setIsCorrect, setScore, score);
    }

    if (questionsList) {
      setTimeout(() => {
        if (currentQuestion === questionsList.length - 1) {
          goToResultPage(navigate);
        } else {
          setCurrentQuestion(currentQuestion + 1);
          setIsAnswered(false);
        }
      }, 1000);
    }
  };

  return (
    <div className="mainGameContainer">
      <div className="picContainer">
        <img src={GamePic} width="100px" alt="Game" />
      </div>
      {!questionsList.length ? (
        <h1>Loading...</h1>
      ) : (
        <MuiRadio data={data} goToNextQuestion={goToNextQuestion} />
      )}
      {isAnswered ? (
        <div className="isCorrectContainer">
          {isCorrect ? "Correct!" : "Incorrect!"}
        </div>
      ) : (
        ""
      )}
      <Link to={"/"}>
        <Button
          className="button"
          size="medium"
          variant="contained"
          onClick={() => setScore(0)}
        >
          Exit
        </Button>
      </Link>
    </div>
  );
};

export default GamePage;
