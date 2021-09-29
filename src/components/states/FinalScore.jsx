import { Button, Center } from "@chakra-ui/react";

const FinalScore = props => {
  return (
    <>
      <Button
        colorScheme="red"
        onClick={() => {
          props.setScore(0);
          props.setQuestions(0);
          props.setGameState("WelcomeMessage");
        }}
      >
        Quit
      </Button>
      <Center fontSize="3vw" my={16}>
        Final Score
      </Center>
      <Center fontSize="3vw" my={16}>
        {props.questions === 0
          ? "0%"
          : ((props.score / props.questions) * 100).toFixed(0) + "%"}
      </Center>
    </>
  );
};

export default FinalScore;
