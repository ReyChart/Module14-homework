// Option №1

const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const result = JSON.parse(jsonString);
console.log(result);

// Option №2

function convertJsonToObj(x) {
   const data = JSON.parse(x);
   return data;
}

console.log(convertJsonToObj(`{
   "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`));