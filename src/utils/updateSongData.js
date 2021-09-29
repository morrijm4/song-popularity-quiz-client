import { URL } from "./constants";
export const updateSongData = async () => {
  await fetch(`${URL}/update_song_data`);
};
