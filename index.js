const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const courses = require('./Data/Course.json');

app.get("/", (req, res)=>{
	res.send("Hello World !");
});

app.get("/courses", (req, res)=>{
	res.send(courses);
});

app.get("/courses/:id", (req, res)=>{
	const id = parseInt(req.params.id);
	const course = courses.courses.find((course)=>course.id == id);
	res.send(course);
});

app.get("/courses/category/:category", (req, res)=>{
	const category = req.params.category;
	const course = courses.courses.filter((course)=>course.category == category);
	res.send(course);
});

app.get("/blogs", (req, res)=>{
	res.send(courses.blog);
});

app.get("/blog/:id", (req, res)=>{
	const id = parseInt(req.params.id);
	const course = courses.blog.find((blog)=>blog.id == id);
	res.send(course);
});


const Port = process.env.Port || 5000;
app.listen(Port, ()=>{
	console.log("Server is running Port ", Port);
});

module.exports = app;