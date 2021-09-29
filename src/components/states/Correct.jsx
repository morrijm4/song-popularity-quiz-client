import { useState, useEffect } from "react";
import { Center, Button } from "@chakra-ui/react";
import { fetchSongData } from "../../utils/fetchSongData.js";

const Correct = props => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchSongData();
      if (data.status === 200) {
        props.setGameData(data);
        props.setGameState("Game");
      } else if (data !== undefined) {
        props.setErrorStatus(data.status);
        props.setErrorStatusMessage(data.statusMessage);
        props.setGameState("Error");
      } else {
        props.setErrorStatus(500);
        props.setErrorStatusMessage(
          "Unable to connect to our server. Sorry :("
        );
        props.setGameState("Error");
      }
    }
    if (loading) {
      fetchData();
    }

    return () => {
      setLoading(false);
    };
  }, [loading, props]);

  return (
    <>
      <Center fontSize="3vw" my={16}>
        Correct!
      </Center>
      <Center>
        <Button
          colorScheme="teal"
          onClick={() => {
            setLoading(true);
          }}
          m={6}
        >
          Next Question
        </Button>
        <Button
          onClick={() => {
            props.setGameState("FinalScore");
          }}
          m={6}
        >
          Finished
        </Button>
      </Center>
    </>
  );
};

export default Correct;
