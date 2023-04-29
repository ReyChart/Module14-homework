const parser = new DOMParser();

const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = [...listNode.querySelectorAll("student")];
const array = new Array();

studentNode.forEach(student => {
    const nameNode = student.querySelector("name");
    const ageNode = student.querySelector("age");
    const profNode = student.querySelector("prof");
    const langAttr = nameNode.getAttribute("lang");

    array.push({
        name: nameNode ? nameNode.textContent.trim().replace(/\s+/g, " ") : '', age: ageNode ? Number(ageNode.textContent) : 0, 
        prof: profNode ? profNode.textContent.trim() : '', 
        lang: langAttr ? langAttr.trim() : '',
    })
});

const result = {
    list: array
};

console.log(result);
