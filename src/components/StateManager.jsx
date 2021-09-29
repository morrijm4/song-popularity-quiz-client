import { useState } from "react";
import Game from "./states/Game";
import WelcomeMessage from "./states/WelcomeMessage";
import FinalScore from "./states/FinalScore";
import Correct from "./states/Correct";
import Incorrect from "./states/Incorrect";
import Error from "./states/Error";
import { Center } from "@chakra-ui/react";

// TODO: Change single quotes to double quotes

const StateManager = () => {
  const [gameState, setGameState] = useState("WelcomeMessage");
  const [gameData, setGameData] = useState();
  const [errorStatus, setErrorStatus] = useState();
  const [errorStatusMessage, setErrorStatusMessage] = useState();

  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(0);

  switch (gameState) {
    case "Game":
      return (
        <Game
          setGameState={setGameState}
          setGameData={setGameData}
          gameData={gameData}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      );
    case "FinalScore":
      return (
        <FinalScore
          setGameState={setGameState}
          setScore={setScore}
          setQuestions={setQuestions}
          score={score}
          questions={questions}
        />
      );
    case "WelcomeMessage":
      return (
        <WelcomeMessage
          setGameState={setGameState}
          setGameData={setGameData}
          setErrorStatus={setErrorStatus}
          setErrorStatusMessage={setErrorStatusMessage}
          gameData={gameData}
        />
      );
    case "Correct":
      return (
        <Correct
          setGameState={setGameState}
          setGameData={setGameData}
          setErrorStatus={setErrorStatus}
          setErrorStatusMessage={setErrorStatusMessage}
        />
      );
    case "Incorrect":
      return (
        <Incorrect
          setGameState={setGameState}
          setGameData={setGameData}
          setErrorStatus={setErrorStatus}
          setErrorStatusMessage={setErrorStatusMessage}
        />
      );
    case "Error":
      return <Error status={errorStatus} statusMessage={errorStatusMessage} />;
    default:
      return <Center>Error: invalid game state</Center>;
  }
};

export default StateManager;
