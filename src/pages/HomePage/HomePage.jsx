import "./HomePage.css";
import GamePic from "../../assets/mainPic.png";
import { Button } from "@mui/material";
import { goToGamePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="mainHomePageContainer">
      <img src={GamePic} width="400px" alt="GamePic" />
      <Button
        className="button"
        size="medium"
        variant="contained"
        onClick={() => goToGamePage(navigate)}
      >
        Start
      </Button>
    </div>
  );
};

export default HomePage;
