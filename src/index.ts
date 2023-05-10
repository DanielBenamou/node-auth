require("dotenv").config();
import express from "express";
import { createConnection, getRepository } from "typeorm";
import { routes } from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import { User } from "./entity/user.entity";

//Express server , creating the server
const app = express();
//Response the data in json
app.use(express.json());
//This code sets up a piece of middleware in the express application to parse HTTP cookies.
// HTTP cookies are small pieces of data that are stored in a user's web browser
// and sent back to the server with each request. They are commonly used to store information such as session identifiers,
// user preferences, and more.Ω
app.use(cookieParser());

//CORS is a security feature that blocks web browsers from making requests to a server that is hosted on a different domain.
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:4200",
    ],
    credentials: true,
  })
);


createConnection().then(async () => {
  // Retrieve data from the database
  const userRepository = getRepository("User");
  const users = await userRepository.find();
  // Create an API endpoint to return the data
  app.get("/api/users", (req, res) => {
    res.send(users);
  });
});



routes(app);
app.listen(8000, () => {
  console.log("connect to the Localhost server on port 8000");
});
// });
