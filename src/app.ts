require("dotenv").config();
import { dbConfig } from "./model";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

import { route } from "./route";

const overrideDatabase = process.env.DB_OVERRIDE === "true";

dbConfig
  .sync({ force: overrideDatabase })
  .then(() => console.log("connected to db"))
  .catch((error) => {
    console.log("sth is not yes", error);
    throw "error";
  });

const app = express();

const allowedOrigins: Array<string> = ["http://localhost:3000"];

app.use(
  bodyParser.urlencoded({
    extended: true,
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
    },
  })
);

route(app);

export { app };
