// server/index.js
const express = require("express");
const bodyParser = require("body-parser");
const { shuffleParticipants } = require("./SecretSantaShuffler.js");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
  // Run your list shuffling function here
  console.log(req.body);
  console.log("test");
  let secretSantaShuffled = shuffleParticipants(req.body);
  console.log(secretSantaShuffled);
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
