const express = require("express")
const bodyParser = require("body-parser");

const app = express()
const port = 3000

const gameExamples = ["Doom", "Call of Duty", "PayDay2", "FortNite", "PubG", "DayZ"]

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/games", (req, res) => {
    res.send(gameExamples)
})

app.post("/games", (req, res) => {
    console.log(req.body)
    res.send("Games here!")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))