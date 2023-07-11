import express from "express";
import cors from "cors";
import {
  practiceTasks,
  Practice,
  User,
  students,
  studentListPractice,
} from "./data.js";
const app = express();
const port = process.env.PORT || 3009;
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fetch from "node-fetch";
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
app.use(express.json());

app.get('/tests', async  (req, res) => {
  const token = "6183220599:AAGzgg3MrVrxu2lu92WoBRRpLWanGa2UmWU";
  const myId = 957139896;


  let result = {
    idTask: 1,
    idStudent: 957139896,
    link: "https://cdpn.io/cpe/boomboom/index.html?key=index.html-926c7914-f3e8-a91b-5f31-f26f474c5703",
    successTask: [1, 0, 0, 0],
    code: {
      html: "%0A%20%20%20%20%0A%3Cdiv%20class%3D%22block%22%3E%20%3Cdiv%3E%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%0A%20%20%0A%3Cscript%20src%3D%22https%3A%2F%2Fcpwebassets.codepen.io%2Fassets%2Fcommon%2FstopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js%22%3E%3C%2Fscript%3E%0A%20%20%3Cscript%20src%3D%22https%3A%2F%2Fcdpn.io%2Fcpe%2Fboomboom%2Fpen.js%3Fkey%3Dpen.js-926c7914-f3e8-a91b-5f31-f26f474c5703%22%20crossorigin%3D%22%22%3E%3C%2Fscript%3E%0A%0A%0A%3C%2Fdiv%3E",
      css:
        "\n" +
        "    .block {\n" +
        "  width: 100px;\n" +
        "  height: 300px;\n" +
        "  background: red;\n" +
        "}\n" +
        "        \n" +
        "  ",
      js: "",
    },
  };

  let task = await Practice.findOne({ id: result.idTask });
  let successTask = "";
  let wrongTask = "";

  result.successTask.forEach((status, i) => {
    if (status == 1) {
successTask += `✅ ${task.tasks[i].title}
`;
    } else {
      wrongTask += `❌ ${task.tasks[i].title}
`;
    }
  })


  let templateText =
    `
*Учень завершив практичне завдання!*

Учень: ${getNamesOneStudentByIdGroup(result.idStudent)}

Завдання №${result.idTask}: 
*${task.name}*

Виконав завдання:
${successTask}
Не виконав завдання:
${wrongTask}

[Переглянути роботу:](${result.link})

Код:
*HTML*:
` +
    "`" +
    decodeURIComponent(result.code.html) +
    "`" +
    `

*CSS*:

` +
    "`" +
    decodeURIComponent(result.code.css) +
    "`" +
    `

*JS*
` +
    "`" +
    decodeURIComponent(result.code.js) +
    "`" +
    `
  
  `;

  templateText = templateText.replace(/\n/g, "%0A");

  let sendURL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${myId}&text=${templateText}&parse_mode=Markdown`;
  fetch(sendURL)

  console.log(templateText);

  

  res.send('ok')

})






app.post("/set/practice", async (req, res) => {
  const data = req.body;
  const token = "6183220599:AAGzgg3MrVrxu2lu92WoBRRpLWanGa2UmWU";
  const myId = 957139896;
  let isFinish = false;

  let result = req.body;
  // console.log(result);
  // let result = {
  //   idTask: 1,
  //   idStudent: -1001912511447,
  //   link: "https://cdpn.io/cpe/boomboom/index.html?key=index.html-926c7914-f3e8-a91b-5f31-f26f474c5703",
  //   successTask: [1, 0, 0, 0],
  //   code: {
  //     html: "%0A%20%20%20%20%0A%3Cdiv%20class%3D%22block%22%3E%20%3Cdiv%3E%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%0A%20%20%0A%3Cscript%20src%3D%22https%3A%2F%2Fcpwebassets.codepen.io%2Fassets%2Fcommon%2FstopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js%22%3E%3C%2Fscript%3E%0A%20%20%3Cscript%20src%3D%22https%3A%2F%2Fcdpn.io%2Fcpe%2Fboomboom%2Fpen.js%3Fkey%3Dpen.js-926c7914-f3e8-a91b-5f31-f26f474c5703%22%20crossorigin%3D%22%22%3E%3C%2Fscript%3E%0A%0A%0A%3C%2Fdiv%3E",
  //     css:
  //       "\n" +
  //       "    .block {\n" +
  //       "  width: 100px;\n" +
  //       "  height: 300px;\n" +
  //       "  background: red;\n" +
  //       "}\n" +
  //       "        \n" +
  //       "  ",
  //     js: "",
  //   },
  // };


  let task = await Practice.findOne({ id: result.idTask });
  let studentPractice = await studentListPractice.findOne({
    idPractice: result.idTask,
  });

 

  studentPractice.students.forEach(async (student, index) => {
    if (student.idStudent == result.idStudent) {

      console.log("student.finish: ", student.finish);

      
        isFinish = student.finish;
        if (isFinish == false) {
          const nestedArrayPath = `students.${index}.historyCode`;
          const studentPath = `students.${index}.finish`;

          const newElement = {
            html: result.code.html,
            css: result.code.css,
            js: result.code.js,
          };
          let a = await studentListPractice.updateOne(
            { idPractice: result.idTask },
            { $push: { [nestedArrayPath]: newElement } }
          );


          if (result.type == "sendInfo") {
            let aa = await studentListPractice.updateOne(
              { idPractice: result.idTask },
              { [studentPath]: true }
              );
              console.log(aa);
          }

          console.log(a);
        }
    }
  });


if (isFinish == false) {

  let successTask = "";
  let wrongTask = "";

  result.successTask.forEach((status, i) => {
    if (status == 1) {
      successTask += `✅ ${task.tasks[i].title} ${task.tasks[i].label}
`;
    } else {
      wrongTask += `❌ ${task.tasks[i].title} ${task.tasks[i].label}
`;
    }
  });

   let templateText;

    if (result.type == "updateInfo") {


  templateText =
    `
*ОНОВЛЕННЯ ДАННИХ*

Учень: ${getNamesOneStudentByIdGroup(result.idStudent)}

Завдання №${result.idTask}: 
*${task.name}*

Виконав завдання:
${successTask}
Не виконав завдання:
${wrongTask}

[Переглянути роботу:](${result.link})

Код:
*HTML*:
` +
    "`" +
    decodeURIComponent(result.code.html) +
    "`" +
    `

*CSS*:

` +
    "`" +
    decodeURIComponent(result.code.css) +
    "`" +
    `

*JS*
` +
    "`" +
    decodeURIComponent(result.code.js) +
    "`" +
    `
  
  `;

  templateText = templateText.replace(/\n/g, "%0A");

    
    }

    if (result.type == "sendInfo") {
    


  templateText =
    `
*Учень завершив практичне завдання!*

Учень: ${getNamesOneStudentByIdGroup(result.idStudent)}

Завдання №${result.idTask}: 
*${task.name}*

Виконав завдання:
${successTask} 
Не виконав завдання:
${wrongTask}

[Переглянути роботу:](${result.link})

Код:
*HTML*:
` +
    "`" +
    decodeURIComponent(result.code.html) +
    "`" +
    `

*CSS*:

` +
    "`" +
    decodeURIComponent(result.code.css) +
    "`" +
    `

*JS*
` +
    "`" +
    decodeURIComponent(result.code.js) +
    "`" +
    `
  
  `;

  templateText = templateText.replace(/\n/g, "%0A");

    }




  let sendURL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${myId}&text=${templateText}&parse_mode=Markdown`;
  fetch(sendURL);

  // console.log(templateText);

  res.send("ok");
  }
  else {
    res.send("error");
  }
  // res.send(`Hello, POST request received! Data: ${JSON.stringify(data)}`);
});


app.get("/js/practice/:idTask/:idStudent", async (req, res) => {
  let idTask = req.params.idTask;
  let idStudent = req.params.idStudent;
  let studentPractice = await studentListPractice.findOne({
    idPractice: idTask,
  });
  let imageResult = studentPractice.imageResult;
  let template = `
  
let idStudent = ${idStudent};
let idTask = ${idTask};
let imageResult = ${imageResult}

initProject(idStudent, idTask, imageResult);
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
  let nameStudent = getNamesOneStudentByIdGroup(idStudent);
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
  return res.send(`
  
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




