/* eslint-disable no-unused-vars */
import express from "express";
import faker from "faker";
import apiRouter from "./server/index.mjs"; // Cambio aquí
const app = express();
import cors from "cors"
//import  errorLogs from "./middleware/error.hendler.js"
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send("reading on port", port);
});

apiRouter(app);
//app.use(errorLogs);
//app.use(handleError);

app.listen(port, (req, res) => {
    console.log("listening on port", port);
});