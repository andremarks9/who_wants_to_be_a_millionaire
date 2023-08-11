import "./GamePage.css";
import GamePic from "../../assets/mainPic.png";
import { useState } from "react";
import { goToResultPage } from "../../routes/coordinator";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { URL } from "../../constants/URL";
import { useQuestionData } from "../../hooks/useQuestionData";

const GamePage = ({ setScore, score }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const { data, error } = useQuestionData(URL, currentQuestion);

  const onSubmitQuestions = (answer) => {
    if (answer) setIsAnswered(true);
    if (answer === data.correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      if (currentQuestion === 5) {
        goToResultPage(navigate);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnswered(false);
      }
    }, 1000);
  };

  return (
    <div className="mainGameContainer">
      <div className="picContainer">
        <img src={GamePic} width="100px" alt="Game" />
      </div>
      {error !== undefined ? (
        "Something happened!"
      ) : (
        <div className="questionContainer">
          <div className="titleContainer">{data?.question}</div>
          <div className="optionListContainer">
            {data?.answers?.map((item, index) => {
              return (
                <span
                  onClick={() => onSubmitQuestions(item)}
                  className="optionContainer"
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      )}
      {isAnswered && <p>{isCorrect ? "Correct!" : "Incorrect!"}</p>}
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
