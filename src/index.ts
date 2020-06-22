import { app } from "./app";
const port = process.env.PORT || 3003;
const debug = require("debug")("Index");

app.listen(port, () => debug(`FSRanking backend listening on port ${port}`));
