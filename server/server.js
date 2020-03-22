const cors = require("cors");
const schema = require("./schema.js");
const express = require("express");
const bparser = require("body-parser");
const expressGraphQL = require("express-graphql");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(port, () => console.log(`server running on port ${port}`));
