const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const categories = require("./data/categories.json");
const quiz = require("./data/quiz.json")

app.use(cors());

app.get("/categories", async(req, res) =>{
    res.send(categories)
});


app.get("/quizzes", async(req, res) =>{
    res.send(quiz)
});


app.get("/categories/:id", async(req, res) =>{
    const id = req.params.id;
    const categoryQuiz = quiz.filter(q => q.category_id == id);
    res.send(categoryQuiz);
});


app.get("/", async(req, res)=>{
    res.send("Exam Hub Is Running")
});

app.listen(port, () =>{
    console.log(`Exam Hub Server Is Running On Port ${port}`)
});