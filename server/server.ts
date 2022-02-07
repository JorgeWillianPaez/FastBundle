import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import config from "./database";

const PORT = 3000;

createConnection(config)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}!`);
    });
  })
  .catch((err) => console.log(err));
