import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, setGameOver, correctWord, currAttempt } = useContext(AppContext);

  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "Je hebt het woord geraden" : "Je hebt het woord niet geraden"}</h3>
      <h1>Het woord is: {correctWord}</h1>
      {gameOver.guessedWord && (<h3>Je hebt het woord geraden in {currAttempt.attempt} pogingen</h3>)}
    </div>
  );
}

export default GameOver;
