import app from "./src/app.js";

const DOOR = 3000;

app.listen(DOOR, () => {
  console.log(`running server on http://localhost:${DOOR}`);
});