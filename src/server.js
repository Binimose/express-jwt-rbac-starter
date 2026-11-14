// Express server entry point
const express = require("express");
const app = express();
app.get("/health", (req, res) => res.json({ status: "healthy" }));
