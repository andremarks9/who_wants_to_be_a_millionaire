import "./GamePage.css";
import GamePic from "../../assets/mainPic.png";
import { useState } from "react";
import { goToHomePage, goToResultPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { URL } from "../../constants/URL";
import { useQuestionData } from "../../hooks/useQuestionData";

const GamePage = ({ setScore, score }) => {
  const [indexQuestions, setIndexQuestions] = useState(1);
  const navigate = useNavigate();

  const { data, error } = useQuestionData(URL, indexQuestions);

  const onSubmitQuestions = (answer) => {
    if (answer === data.correctAnswer) setScore(score + 1);

    setTimeout(() => {
      if (indexQuestions === 5) {
        goToResultPage(navigate);
      } else {
        setIndexQuestions(indexQuestions + 1);
      }
    }, 1000);
  };

  const toHomePage = () => {
    setScore(0);
    goToHomePage(navigate);
  };

  return (
    <div className="mainGameContainer">
      <div className="picContainer">
        <img src={GamePic} width="200px" alt="Game" />
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
      <Button
        className="button"
        size="medium"
        variant="contained"
        onClick={toHomePage}
      >
        Exit
      </Button>
    </div>
  );
};

export default GamePage;
