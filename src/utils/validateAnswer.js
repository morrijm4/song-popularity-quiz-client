import { URL } from "./constants";

const validateAnswer = async data => {
  const res = await fetch(`${URL}/validate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};

export default validateAnswer;
