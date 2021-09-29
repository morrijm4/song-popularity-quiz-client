import { useState, useEffect } from "react";
import { Center, Button } from "@chakra-ui/react";
import { fetchSongData } from "../../utils/fetchSongData";

const WelcomeMessage = props => {
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
      <Center fontSize="7vw" fontWeight={600}>
        Hi, Change++ !
      </Center>
      <Center>
        <Button
          isLoading={loading}
          fontSize="4em"
          colorScheme="teal"
          boxShadow="xl"
          my={16}
          p={20}
          onClick={() => {
            setLoading(true);
          }}
        >
          Play
        </Button>
      </Center>
      <Center fontSize="7vw" fontWeight={600}>
        Are you ready ?
      </Center>
    </>
  );
};

export default WelcomeMessage;
