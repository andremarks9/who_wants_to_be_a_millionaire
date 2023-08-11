import { Button } from "@mui/material";
import "./ResultPage.css";
import { Link } from "react-router-dom";
import { URL } from "../../constants/URL";
import { useAllQuestions } from "../../hooks/useAllQuestions";

const ResultPage = ({ score, setScore }) => {
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
        <Link to={"/game"}>
          <Button
            className="button"
            size="medium"
            onClick={setScore(0)}
            variant="contained"
          >
            Play Again
          </Button>
        </Link>
        <Link to={"/"}>
          <Button
            className="button"
            size="medium"
            onClick={setScore(0)}
            variant="contained"
          >
            To Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
