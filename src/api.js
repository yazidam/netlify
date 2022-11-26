const express = require("express");

const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "hosting good",
  });
});

router.get("/ahmed", (req, res) => {
  res.json({
    message: "ahmed",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
