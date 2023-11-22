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

const day = newDate();
const year = new Date().getFullYear();

// ROUTES

app.get("/", (req, res) => {
  tasks = [];

  res.render("index.ejs", { day: day, year: year });
});

app.post("/", (req, res) => {
  const { task } = req.body;

  tasks.unshift(task);

  res.render("index.ejs", { tasks: tasks, day: day, year: year });
});

app.post("/delete", (req, res) => {
  tasks = [];
  res.render("index.ejs", { tasks: tasks, day: day, year: year });
});
// Edit Page

app.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  const editTask = tasks[id];

  res.render("edit.ejs", {
    editTask: editTask,
    day: day,
    year: year,
    editId: id,
  });
});

app.post("/edit-post/:id", (req, res) => {
  const { newTask } = req.body;
  const { id } = req.params;
  tasks[id] = newTask;

  res.render("index.ejs", { tasks: tasks, day: day, year: year });
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  tasks.splice(id, 1);

  res.render("index.ejs", { tasks: tasks, day: day, year: year });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
