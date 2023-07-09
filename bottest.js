async function test () {let result = {
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

let templateText = `
<b>Учень завершив практичне завдання!</b>
Учень: ${getNamesOneStudentByIdGroup(result.idStudent)}
Завдання №${result.idTask}: 
${task.name}
Виконав завдання:
Не виконав завдання:

Переглянути роботу:
${result.link}

Код:
<b>HTML:</b>
<pre>
${encodeURIComponent(result.code.html)}
</pre>

<b>CSS:</b>
<pre>
${encodeURIComponent(result.code.html)}
</pre>

<b>JS:</b>
<pre>
${encodeURIComponent(result.code.js)}
</pre>
  
  `;

sendURL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${myId}&text=${templateText}&parse_mode=HTML`;
fetch(sendURL);
}
test();