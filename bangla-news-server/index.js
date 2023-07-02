const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

//categories data
const categories = require("./categories.json");
// news data
const allNews = require("./news.json");

// get requests
app.get("/", (req, res) => {
    res.send("Bangla News Server API")
})

app.get("/news-categories", (req, res) => {
    res.send(categories);
})

app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    if (id === "0") {
        res.send(allNews)
    }
    else {
        const selectedNews = allNews.filter(news => id === news.category_id);
        res.send(selectedNews);
    }
})



app.get("/news", (req, res) => {
    res.send(allNews);
})

app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const selectedNews = allNews.find(news => id === news._id);
    res.send(selectedNews);
})


app.listen(port, () => {
    console.log("Bangla News Server is running, port: ", port);
})