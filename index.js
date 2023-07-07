import express from "express";
import cors from "cors";
import practiceTasks from "./data.js";
const app = express();
const port = process.env || 3009;



let students = [
  {
    name: "Учень",
    lastName: "Учнівський",
    days: [
      {
        day: "1",
        time_h: "14",
        time_m: "45",
      },
      {
        day: "6",
        time_h: "14",
        time_m: "00",
      },
      {
        day: "6",
        time_h: "15",
        time_m: "30",
      },
    ],
    pay: {
      day: "16",
      month: "05",
      sum: "2600",
      isPay: true,
    },
    events: [
      {
        date: "",
        title: "",
        grade: "",
        results: [
          {
            photo: "",
            url: "",
            description: "",
          },
        ],
      },
    ],

    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],

    idGroup: "-1001737433387",
  },
  {
    name: "Аня",
    lastName: "Джур",
    days: [
      {
        day: "1",
        time_h: "14",
        time_m: "45",
      },
      {
        day: "6",
        time_h: "14",
        time_m: "00",
      },
      {
        day: "6",
        time_h: "15",
        time_m: "30",
      },
    ],
    pay: {
      day: "16",
      month: "05",
      sum: "2600",
      isPay: true,
    },
    events: [
      {
        date: "",
        title: "",
        grade: "",
        results: [
          {
            photo: "",
            url: "",
            description: "",
          },
        ],
      },
    ],
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],

    idGroup: "-1001939567412",
  },
  {
    name: "Лев",
    lastName: "Моляренко",
    days: [
      {
        day: "1",
        time_h: "15",
        time_m: "30",
      },
      {
        day: "3",
        time_h: "18",
        time_m: "30",
      },
    ],
    pay: {
      day: "09",
      month: "05",
      sum: "1000",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    events: [
      [
        {
          type: "solo", // quiz // group // homework
          grade: "12",
          teacher: "Дмитро",
          technologiesStack: ["bootstrap", "html"],
          id: "aabbc435345",
          date: "25.05.2023",
          presence: true,
        },
      ],
      [
        {
          type: "group",
          grade: "12",
          teacher: "Дмитро",
          technologiesStack: ["bootstrap", "html"],
          id: "aabbc435345",
          date: "25.05.2023",
          presence: true,
        },
      ],
    ],
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001563563406",
  },
  {
    name: "Антон",
    lastName: "Полісько",
    days: [
      {
        day: "1",
        time_h: "16",
        time_m: "15",
      },
    ],
    pay: {
      day: "01",
      month: "05",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 270,
      currentMoney: 270,
      lastResultMoney: 70,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001814252504",
  },
  {
    name: "Матвій",
    lastName: "Бурлака",
    days: [
      {
        day: "1",
        time_h: "17",
        time_m: "00",
      },
      {
        day: "7",
        time_h: "22",
        time_m: "00",
      },
    ],
    pay: {
      day: "26",
      month: "05",
      sum: "2200",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001794253439",
  },
  {
    name: "Даніель",
    lastName: "Шаповал",
    days: [
      {
        day: "1",
        time_h: "17",
        time_m: "45",
      },
      {
        day: "13",
        time_h: "16",
        time_m: "15",
      },
    ],
    pay: {
      day: "10",
      month: "05",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 375,
      currentMoney: 50,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001797848661",
  },
  {
    name: "Назар",
    lastName: "Гончаренко",
    days: [
      {
        day: "1",
        time_h: "19",
        time_m: "15",
      },
      {
        day: "5",
        time_h: "21",
        time_m: "00",
      },
    ],
    pay: {
      day: "11",
      month: "05",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001985178316",
  },
  {
    name: "Катя",
    lastName: "Гриневич",
    days: [
      {
        day: "1",
        time_h: "18",
        time_m: "30",
      },
      {
        day: "5",
        time_h: "20",
        time_m: "00",
      },
      {
        day: "6",
        time_h: "12",
        time_m: "00",
      },
    ],
    pay: {
      day: "14",
      month: "05",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001910544350",
  },

  {
    name: "Саша",
    lastName: "Риндич",
    days: [
      {
        day: "1",
        time_h: "20",
        time_m: "45",
      },
      {
        day: "6",
        time_h: "19",
        time_m: "15",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 50,
      currentMoney: 50,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001693626648",
  },
  {
    name: "Роман",
    lastName: "Березюк",
    days: [
      {
        day: "1",
        time_h: "21",
        time_m: "30",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001806769354",
  },

  {
    name: "Гліб",
    lastName: "Мегець",
    days: [
      {
        day: "2",
        time_h: "14",
        time_m: "00",
      },
      {
        day: "4",
        time_h: "14",
        time_m: "00",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001927434425",
  },

  {
    name: "Марк",
    lastName: "Дрозд",
    days: [
      {
        day: "2",
        time_h: "14",
        time_m: "45",
      },
      {
        day: "4",
        time_h: "15",
        time_m: "30",
      },
    ],
    pay: {
      day: "01",
      month: "05",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001844613258",
  },

  {
    name: "Максим",
    lastName: "Іваненко",
    days: [
      {
        day: "2",
        time_h: "15",
        time_m: "30",
      },
    ],
    pay: {
      day: "11",
      month: "05",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001754227604",
  },

  {
    name: "Даниїл",
    lastName: "Моляренко",
    days: [
      {
        day: "2",
        time_h: "16",
        time_m: "15",
      },
      {
        day: "6",
        time_h: "13",
        time_m: "00",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001839050123",
  },

  {
    name: "Дмитро",
    lastName: "Джур",
    days: [
      {
        day: "2",
        time_h: "17",
        time_m: "45",
      },
      {
        day: "4",
        time_h: "16",
        time_m: "15",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001912511447",
  },

  {
    name: "Микита",
    lastName: "Моляренко",
    days: [
      {
        day: "2",
        time_h: "18",
        time_m: "30",
      },
      {
        day: "3",
        time_h: "15",
        time_m: "30",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001593535519",
  },

  {
    name: "Ксенія",
    lastName: "Матвєєва",
    days: [
      {
        day: "2",
        time_h: "20",
        time_m: "00",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 940,
      currentMoney: 70,
      lastResultMoney: 70,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001817767243",
  },

  {
    name: "Леся",
    lastName: "Перконос",
    days: [
      {
        day: "2",
        time_h: "20",
        time_m: "45",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 220,
      currentMoney: 220,
      lastResultMoney: 70,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001811029264",
  },

  {
    name: "Роман",
    lastName: "Євчук",
    days: [
      {
        day: "2",
        time_h: "21",
        time_m: "30",
      },
      {
        day: "6",
        time_h: "17",
        time_m: "00",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001859515538",
  },

  {
    name: "Павло",
    lastName: "Кіячик",
    days: [
      {
        day: "3",
        time_h: "10",
        time_m: "00",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 140,
      currentMoney: 140,
      lastResultMoney: 20,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001977412905",
  },

  {
    name: "Гліб",
    lastName: "Клименко",
    days: [
      {
        day: "3",
        time_h: "13",
        time_m: "15",
      },
      {
        day: "5",
        time_h: "13",
        time_m: "15",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 50,
      currentMoney: 50,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001957372272",
  },

  {
    name: "Лев",
    lastName: "Шабалін",
    days: [
      {
        day: "3",
        time_h: "14",
        time_m: "00",
      },
      {
        day: "5",
        time_h: "14",
        time_m: "45",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 150,
      currentMoney: 150,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001768830486",
  },

  {
    name: "Даниїл",
    lastName: "Білий",
    days: [
      {
        day: "3",
        time_h: "14",
        time_m: "45",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001653766681",
  },

  {
    name: "Олексій",
    lastName: "Єрмусевич",
    days: [
      {
        day: "3",
        time_h: "17",
        time_m: "0",
      },
      {
        day: "7",
        time_h: "21",
        time_m: "15",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001905845420",
  },

  {
    name: "Паша",
    lastName: "Маренич",
    days: [
      {
        day: "2",
        time_h: "17",
        time_m: "45",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 220,
      currentMoney: 220,
      lastResultMoney: 40,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001755202216",
  },

  {
    name: "Арсеній",
    lastName: "Середа",
    days: [
      {
        day: "3",
        time_h: "19",
        time_m: "15",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 550,
      currentMoney: 550,
      lastResultMoney: 70,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001621006693",
  },
  {
    name: "Ілля",
    lastName: "Малов",
    days: [
      {
        day: "3",
        time_h: "20",
        time_m: "00",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 400,
      currentMoney: 400,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001538043990",
  },
  {
    name: "Віталій",
    lastName: "Красюк",
    days: [
      {
        day: "3",
        time_h: "20",
        time_m: "45",
      },
      {
        day: "6",
        time_h: "21",
        time_m: "15",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 100,
      currentMoney: 100,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001766510522",
  },
  {
    name: "Іван",
    lastName: "Шмуліч",
    days: [
      {
        day: "3",
        time_h: "21",
        time_m: "30",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001807372173",
  },
  {
    name: "Роман",
    lastName: "Березюк",
    days: [
      {
        day: "3",
        time_h: "22",
        time_m: "15",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001806769354",
  },
  {
    name: "Олексій",
    lastName: "Калаба",
    days: [
      {
        day: "4",
        time_h: "17",
        time_m: "45",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 200,
      currentMoney: 200,
      lastResultMoney: 40,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001823540443",
  },
  {
    name: "Пилип",
    lastName: "Кірчев",
    days: [
      {
        day: "4",
        time_h: "18",
        time_m: "30",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 200,
      currentMoney: 200,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001507302092",
  },
  {
    name: "Георгій",
    lastName: "Аль-Хамес",
    days: [
      {
        day: "4",
        time_h: "19",
        time_m: "15",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 415,
      currentMoney: 415,
      lastResultMoney: 70,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001840763808",
  },

  {
    name: "Андрій",
    lastName: "Джур",
    days: [
      {
        day: "2",
        time_h: "17",
        time_m: "00",
      },
      {
        day: "4",
        time_h: "21",
        time_m: "30",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 50,
      currentMoney: 50,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001920572313",
  },

  {
    name: "Євгеній",
    lastName: "Швидкий",
    days: [
      {
        day: "5",
        time_h: "18",
        time_m: "30",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001708915522",
  },
  {
    name: "Анна",
    lastName: "Мотовильник",
    days: [
      {
        day: "6",
        time_h: "17",
        time_m: "45",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 0,
      currentMoney: 0,
      lastResultMoney: 0,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001163199751",
  },
  {
    name: "Кирил",
    lastName: "Жила",
    days: [
      {
        day: "7",
        time_h: "19",
        time_m: "15",
      },
    ],
    pay: {
      day: "12",
      month: "11",
      sum: "1500",
      isPay: true,
    },
    quiz: {
      allMoney: 50,
      currentMoney: 50,
      lastResultMoney: 50,
    },
    contact: [
      {
        name: "Student",
        number: "+3805045454",
      },
    ],
    idGroup: "-1001737402348",
  },
];

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



app.get("/get/practice/:idTask/:idStudent", (req, res) => {
  let idTask = req.params.idTask;
  let idStudent = req.params.idStudent;
  let nameStudent = getNamesOneStudentByIdGroup(req.params.idStudent);
  let task;
  for (let i = 0; i < practiceTasks.length; i++) {
    if (practiceTasks[i].id == idTask) {
      task = practiceTasks[i];
    }
  }



  let HTML = task.data.html;
  let CSS = task.data.css;
  let JS = task.data.js;

  var data = {
    title: `${task.name} | ${nameStudent}`,
    description: "",
    html: HTML,
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
    css_external: "",
    js_external: "",
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
