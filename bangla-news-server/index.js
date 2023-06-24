const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

//categories data
const categories = require("./categories.json");

app.get("/", (req, res) => {
    res.send("Bangla News Server API")
})

app.get("/news-categories", (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log("Bangla News Server is running, port: ", port);
})