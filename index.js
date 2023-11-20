import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// MIDDLEWARES

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let tasks = [];

// FUNCTIONS

const newDate = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();
  const day = days[date.getDay()];
  const month = months[date.getMonth()] + " " + date.getDate();
  const fullDate = day + ", " + month;

  return fullDate;
};

// ROUTES

app.get("/", (req, res) => {
  tasks = [];
  const day = newDate();
  const year = new Date().getFullYear();
  console.log(year)
  res.render("index.ejs", { day: day, year:year });
});

app.post("/", (req, res) => {
  const day = newDate();
  const { task } = req.body;
  const year = new Date().getFullYear();
  tasks.unshift(task);
  console.log(tasks);
  res.render("index.ejs", { tasks: tasks, day: day, year:year});
});

app.post("/delete", (req,res) => {
  const day = newDate();
  const year = new Date().getFullYear();
  tasks = [];
  res.render("index.ejs", {tasks: tasks, day: day, year:year})
})
app.delete("/:id", (req,res)=> {
  const id = req.params;
  console.log(id + " LUKA")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
