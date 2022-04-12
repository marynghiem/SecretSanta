// server/index.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { shuffleParticipants } = require("./SecretSantaShuffler.js");
const { sendEmail } = require("./EmailSender");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const publicPath = path.join(__dirname, "..", "client/build");
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
  const originalList = req.body;
  const shuffledList = shuffleParticipants(req.body);

  for (let i = 0; i < originalList.length; i++) {
    sendEmail(originalList[i].email, shuffledList[i].name);
  }

  res.json({ message: "Emails sent successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
