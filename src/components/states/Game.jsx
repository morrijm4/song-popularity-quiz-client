import { Box, Text, Button, Center, ButtonGroup } from "@chakra-ui/react";
import { SelectControl, SubmitButton, ResetButton } from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";
import validateAnswer from "../../utils/validateAnswer.js";
import shuffle from "../../utils/shuffle.js";

const Game = props => {
  const onSubmit = async values => {
    const res = await validateAnswer(values);
    if (res.status === 0) {
      // change page and add to score
      props.setScore(prevState => {
        const newScore = prevState + 1;
        return newScore;
      });
      props.setQuestions(prevState => {
        const newQuestions = prevState + 1;
        return newQuestions;
      });
      props.setGameState("Correct");
    } else if (res.status === 1) {
      // incorrect
      props.setQuestions(prevState => {
        const newQuestions = prevState + 1;
        return newQuestions;
      });
      props.setGameState("Incorrect");
    } else {
      alert(res.msg);
    }
  };

  const initialValues = {
    song0: "",
    song1: "",
    song2: "",
  };

  const validationSchema = Yup.object({
    song0: Yup.string().required("This field is required"),
    song1: Yup.string().required("This field is required"),
    song2: Yup.string().required("This field is required"),
  });

  const songs = shuffle(props.gameData.list);

  return (
    <>
      <Button
        colorScheme="teal"
        onClick={() => {
          props.setGameState("FinalScore");
        }}
      >
        Finished
      </Button>
      <Center fontSize="3vw" fontWeight={600} mb={16}>
        Rank these songs from most to least popular
      </Center>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form"
            onSubmit={handleSubmit}
          >
            {songs.map((item, i) => (
              <Box key={item.song} fontSize="1.8em" p={6} rounded="md">
                <Text fontSize="1em">{item.song}</Text>
                <Text fontSize="0.5em">{"by " + item.artist}</Text>
                <SelectControl
                  my={2}
                  name={"song" + i}
                  selectProps={{
                    placeholder: "Select option",
                  }}
                >
                  <option value={props.gameData.list[0].song}>1</option>
                  <option value={props.gameData.list[1].song}>2</option>
                  <option value={props.gameData.list[2].song}>3</option>
                </SelectControl>
              </Box>
            ))}

            <ButtonGroup>
              <SubmitButton>Submit</SubmitButton>
              <ResetButton>Reset</ResetButton>
            </ButtonGroup>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default Game;
