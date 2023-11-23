"use strict";
console.log("praktice.js file was loaded");

const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
  },
];
console.table(students);
// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu

// sukurti ir patalpintu ul
const ulEl = document.createElement("ul");
document.body.append(ulEl);
// sukurkti cikla per students
students.forEach((singlStudObj) => {
  // kuriam li
  const liEl = document.createElement("li");
  // ciklo metu paimti varda ir amziu
  const liText = `name: ${singlStudObj.name}, age: ${singlStudObj.age}`;
  console.log("liText ===", liText);
  // idedam i li texta
  liEl.textContent = liText;
  // li talpiname html ul elemente
  ulEl.append(liEl);
});
console.log("ulEl ===", ulEl);
