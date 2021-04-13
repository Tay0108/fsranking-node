require("dotenv").config();
import errorHandler from "./errors/errorHandler";
import { mockDb } from "./mock/mock-db";
import { dbConfig } from "./model";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

import { route } from "./route";

const overrideDatabase = process.env.DB_OVERRIDE === "true";

dbConfig
  .sync({ force: overrideDatabase })
  .then(() => {
    console.log("connected to db");
    if (process.env.DB_MOCK === "true") {
      mockDb();
    }
  })
  .catch((error) => {
    console.log("sth is not yes", error);
  });

const app = express();

const allowedOrigins: Array<string> = [
  "http://localhost:3000",
  "http://localhost:5000",
  "https://fs-ranking.herokuapp.com"
];

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(
          new Error(
            "The CORS policy for this site does not allow access from the specified Origin."
          ),
          false
        );
      }
      return callback(null, true);
    }
  })
);

route(app);

app.use(errorHandler);

export { app };
