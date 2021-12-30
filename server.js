import express from "express";

// Config
import { PORT } from "./config/server_config.js";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello World !");
});

server.listen(PORT, () => console.log(`Server ready on port : ${PORT}`));
