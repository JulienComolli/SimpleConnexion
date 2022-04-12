import express from "express";
import handlebars from "./modules/hbs/handlebars.js";

// Config
import { PORT } from "./config/server_config.js";

const server = express();

server.engine('hbs', handlebars.engine);
server.set('view engine', 'hbs');
server.set('views', './views');
server.use(express.static('public'));


server.get("/", (req, res) => {
  res.render('test');
});



server.listen(PORT, () => console.log(`Server ready on port : ${PORT}`));
