import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import GamePage from "../pages/GamePage/GamePage";
import ResultPage from "../pages/ResultPage/ResultPage";

const Router = () => {
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/game"
          element={<GamePage setScore={setScore} score={score} />}
        />
        <Route
          path="/result"
          element={<ResultPage setScore={setScore} score={score} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
