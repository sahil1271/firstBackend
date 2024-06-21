require('dotenv').config()
const express = require("express");

const app = express();
const Port = 3000


app.get("/", (req, res) => {
    res.send("abc")
})

app.get("/login", (req, res) => {
    res.send("abcd")
})

app.get("/sahil", (req, res) => {
    res.send("abcde")
})

app.listen(process.env.PORT, () => {
    console.log(`this app is listening on port ${Port}`);
})