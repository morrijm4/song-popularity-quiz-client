import { NUMBER_OF_SONGS_TO_RANK, URL } from "./constants";
export const fetchSongData = async () => {
  const responce = await fetch(
    `${URL}/random_songs/${NUMBER_OF_SONGS_TO_RANK}`
  );
  const data = await responce.json();
  return data;
};
