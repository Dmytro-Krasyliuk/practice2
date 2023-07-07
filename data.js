let practiceTasks = [
  {
    id: 1,
    name: "Фон прямокутника",
    description: "",
    type: "",
    level: 1,
    themes: ["css"],
    tasks: [
      {
        title: "Додай прямокутнику червоний фон",
        description: "Червоний на англійській мові - red",
        check: [
          {
            type: "cssValue",
            selector: "div",
            selectorNumber: 0,
            command: "backgroundColor",
            value: "rgb(255, 0, 0)",
          },
        ],
      },
    ],
    data: {
      html: `
<div> <div>
        `,

      css: `
* {
  box-sizing: border-box;
}
html {
  background: #222;
}
        `,
      js: `
let resultInput = document.querySelector('.result-input')

        `,
    },
  },
];

export default practiceTasks;
