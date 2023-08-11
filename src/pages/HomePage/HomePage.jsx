import "./HomePage.css";
import GamePic from "../../assets/mainPic.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mainHomePageContainer">
      <img src={GamePic} width="400px" alt="GamePic" />
      <h2>Welcome do the quiz "Who Wants To Be A Millionaire"</h2>
      <Link to={"/game"}>
        <Button className="button" size="medium" variant="contained">
          Start
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
