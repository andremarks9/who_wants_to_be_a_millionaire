import { Button } from "@mui/material";
import "./ResultPage.css";
import { goToGamePage, goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants/URL";
import { useAllQuestions } from "../../hooks/useAllQuestions";

const ResultPage = ({ score, setScore }) => {
  const navigate = useNavigate();

  const restart = () => {
    setScore(0);
    goToGamePage(navigate);
  };

  const toHomePage = () => {
    setScore(0);
    goToHomePage(navigate);
  };

  const { data, error } = useAllQuestions(URL);

  return (
    <div className="mainResultPage">
      <div className="scoreContainer">
      <h1>Score</h1>
      {error !== undefined ? (
        "Something happened!"
      ) : (
        <h2>{`${score}/${data?.data?.length}`}</h2>
      )}
      </div>
     <div className="buttonContainer">
     <Button
        className="button"
        size="medium"
        onClick={restart}
        variant="contained"
      >
        Play Again
      </Button>
      <Button
        className="button"
        size="medium"
        onClick={toHomePage}
        variant="contained"
      >
        To Home Page
      </Button>
     </div>
    </div>
  );
};

export default ResultPage;
