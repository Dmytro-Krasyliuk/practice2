import express from "express";
import cors from "cors";
import {practiceTasks, Practice, User, students} from "./data.js";
const app = express();
const port = process.env.PORT || 3009;
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




function getNamesOneStudentByIdGroup(id) {
  let names = "";
  students.forEach((student) => {
    if (student.idGroup == id) {
      names = student.name + " " + student.lastName;
    }
  });
  return names;
}

app.use(cors());

app.get("/set/practice/:idTask/:idStudent/:linkresult/", (req, res) => {
  return res.send();
});

app.get("/js/practice/:idTask/:idStudent", (req, res) => {
  let idTask = req.params.idTask;
  let idStudent = req.params.idStudent;
  let template = `
  
let idStudent = ${idStudent};
let idTask = ${idTask};

initProject(idStudent, idTask);
  `;
  fs.writeFile(
    "./practice.js",
    template,
    { encoding: "utf-8" },
    (err, data) => {
      if (!err) {
        res.sendFile(__dirname + "/practice.js", function (err) {
          console.log(err);
        });
      }
    }
  );
});


app.get("/getTasks/:idStudent/:idTask", async (req, res) => {
  let idStudent = req.params.idStudent;
  let idTask = Number(req.params.idTask);
  let task = "not defined";
  task = await Practice.findOne({ id: idTask });
  console.log('hello')
  return res.send({data: task});
});

app.get("/get/practice/:idTask/:idStudent", async (req, res) => {
  let idTask = Number(req.params.idTask);
  let idStudent = req.params.idStudent;
  let nameStudent = getNamesOneStudentByIdGroup(req.params.idStudent);
  let task = await Practice.findOne({ id: idTask });

  let HTML = task.data.html;
  let CSS = task.data.css;
  let JS = task.data.js;

  var data = {
    title: `${task.name} | ${nameStudent}`,
    description: "",
    html: `<div class="main">
    ${HTML}
    </div>
    `,
    html_pre_processor: "none",
    css: CSS,
    css_pre_processor: "none",
    css_starter: "neither",
    css_prefix_free: false,
    js: JS,
    js_pre_processor: "none",
    js_modernizr: false,
    js_library: "",
    html_classes: "",
    css_external: "https://bot.dimanice.repl.co/style.css",
    js_external: [
      "https://bot.dimanice.repl.co/script.js",
      `https://practice2-j4q4.onrender.com/js/practice/${idTask}/${idStudent}/`,
    ],
    template: true,
  };

  // const message = task;
  res.send(`
  
  <form action="https://codepen.io/pen/define" method="POST" target="_blank">
  <input name="data" type="text" class="result-input" value="${JSON.stringify(
    data
  )
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")}" />
  <button class="bubbly-button">Виконати завдання</button>
</form>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #6190E8;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #A7BFE8, #6190E8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #A7BFE8, #6190E8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  display: none;
}
form {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 40vw;
    display: flex;
    height: 30vh;
    justify-content: center;
    align-items: center;

}
body {
  font-size: 16px;
  font-family: "Helvetica", "Arial", sans-serif;
  text-align: center;
  background-color: #f8faff;
}

.bubbly-button {
  font-family: "Helvetica", "Arial", sans-serif;
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  margin-top: 100px;
  margin-bottom: 60px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #cc0081;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
}
.bubbly-button:focus {
  outline: 0;
}
.bubbly-button:before, .bubbly-button:after {
  position: absolute;
  content: "";
  display: block;
  width: 140%;
  height: 100%;
  left: -20%;
  z-index: -1000;
  transition: all ease-in-out 0.5s;
  background-repeat: no-repeat;
}
.bubbly-button:before {
  display: none;
  top: -75%;
  background-image: radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, transparent 20%, #cc0081 20%, transparent 30%), radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #cc0081 15%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
}
.bubbly-button:after {
  display: none;
  bottom: -75%;
  background-image: radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #cc0081 15%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%), radial-gradient(circle, #cc0081 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}
.bubbly-button:active {
  transform: scale(0.9);
  background-color: #b30071;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
}
.bubbly-button.animate:before {
  display: block;
  animation: topBubbles ease-in-out 0.75s forwards;
}
.bubbly-button.animate:after {
  display: block;
  animation: bottomBubbles ease-in-out 0.75s forwards;
}

@keyframes topBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
@keyframes bottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>

<script>
var animateButton = function(e) {


  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
</script>

  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
