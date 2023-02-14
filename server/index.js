const express = require("express");
var app = express();
const cors = require("cors");
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());


app.listen(3000, () => {
    console.log("server running on port 3000");
});

app.get("/api", (req, res, next) => {
    res.json(["Firas","Tony","Lisa","Michael","Ginger","Food"]);
});

app.post("/api",(req, res) => {
    console.log(res.body);
    res.send({data: "data received"});
})