import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const {
    board,
    correctWord,
    currAttempt,
    setDisabledLetters
  } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterSate =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) =>[...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterSate}>
      {letter}
    </div>
  );
}

export default Letter;
