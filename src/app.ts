import express, { Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (_, res:Response) => {
  res.send("Welcome to the TypeScript course!");
});

function createPet(
  id: number, 
  name: string, 
  species: string, 
  age: number, 
  adopted: boolean
) {
  return {
    id,
    name,
    species,
    age,
    adopted,
  };
}

let id = 0;
function generateId() {
  id = id + 1;
  return id;
}

app.post("/pets", (_, res) => {
  const pet1 = createPet(generateId(), "Bolt", "dog", 3, false);
  const pet2 = createPet(generateId(), "Mel", "cat", 2, false);

  res.send([pet1, pet2]);
});

export default app;

