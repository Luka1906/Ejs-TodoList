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
  tasks = []
  const day = newDate();

  res.render("index.ejs", {day: day});
});

app.post("/", (req, res) => {
  const day = newDate()
  const { task } = req.body;


  tasks.unshift(task)
  console.log(tasks)
  res.render("index.ejs", { tasks: tasks, day: day  });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
