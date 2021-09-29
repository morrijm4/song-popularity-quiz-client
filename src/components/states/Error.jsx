import { Center } from '@chakra-ui/react';

const Error = props => {
  return (
    <Center fontSize="4xl">
      {'Error ' + props.status + ' ' + props.statusMessage}
    </Center>
  );
};

export default Error;
