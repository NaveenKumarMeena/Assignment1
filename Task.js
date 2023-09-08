import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import Connection from "./database/db.js"; //On server side it is compulsory to write .js after db file

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
Connection();

app.use("/", routes);
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The server is now running on PORT: ${PORT}`);
});
