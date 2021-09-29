import React, { useEffect } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../utils/ColorModeSwitcher";
import { updateSongData } from "../utils/updateSongData";
import StateManager from "./StateManager";

function App() {
  // Scrape the hot 100 on the backend for the newest data
  useEffect(() => {
    async function updateBackend() {
      await updateSongData();
    }
    updateBackend();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher m={4} />
      <StateManager />
    </ChakraProvider>
  );
}

export default App;
