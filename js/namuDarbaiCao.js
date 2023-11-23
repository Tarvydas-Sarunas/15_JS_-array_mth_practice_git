"use strict";
console.log("namuDarbaiCao.js file was loaded");

// 1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".

function minutesToSeconds(minutes) {
  return `string: ${minutes * 60} seconds`;
}
console.log("minutesToSeconds ===", minutesToSeconds(3));

// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

// sukurti funkcija su vienu argumentu paimti metams
function kiekDienu(metai) {
  // metus dauginu is 365 dienu
  // return rezultatas
  return `Jus jau nugivenote ${metai * 365} dienu`;
}
console.log("kiekDienu ===", kiekDienu(40));

// 3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25

const kvadratas = (skaicius) => skaicius ** 2;
console.log("kvadratas ===", kvadratas(5));

// 4. Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50

const TrikampioPlotas = (ilgis, aukstis) => (ilgis * aukstis) / 2;
console.log("TrikampioPlotas ===", TrikampioPlotas(5, 2));

// 5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".

// funkcija su parametru string
/**
 *
 * @param {string} string
 */
let lastLetter = (string) => string.slice(-1);
lastLetter = (string) => string.charAt(string.length - 1);
console.log("lastLetter ===", lastLetter("zodis"));
// manau kad su charAt(-1) arba gal su slice(-1)
// grazinu rezultata

// 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
/**
 *
 * @param {string} string
 */
function apsukMazosiomis(string) {
  let rez = string.split("").reverse().join("").toLowerCase();
  return rez;
}
console.log("apsukMazosiomis ===", apsukMazosiomis("Petras"));

// 7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

let arrDidNeigSk = (arr) =>
  arr
    .filter((sk) => sk < 0)
    .sort((a, b) => a - b)
    .slice(0, 1);

console.log(
  "arrDidNeigSk ===",
  arrDidNeigSk([-10, 5, 15, -15, 0, 2, -20, 20, -2, -5, 10])
);

// 8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

// sukurk funkcija kuri paima sk
function randomSkaiciai(kiekRandomSk) {
  // tada sugeneruoti random nuo 1 iki 10
  let randSkaiciai = [];

  for (let i = 0; i < kiekRandomSk; i++)
    randSkaiciai.push(Math.floor(Math.random() * 10 + 1));
  return randSkaiciai;
}
console.log("randomSkaiciai ===", randomSkaiciai(5));

// 9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

let koksBoolean = (sk1, sk2) => sk1 + sk2 >= 100;
console.log("koksBoolean ===", koksBoolean(10, 50));

// Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

const zmones = [
  { name: "Alfredas", age: 25 },
  { name: "Jonas", age: 25 },
  { name: "Kasparas", age: 20 },
  { name: "Arunas", age: 20 },
  { name: "Tadas", age: 18 },
  { name: "Algis", age: 18 },
];

// paimame arr
function isrikiuoti(arr) {
  // table age jei nelygus isrikiuoju pagal amziu (sort)
  arr.sort((a, b) => {
    if (a.age !== b.age) {
      let perMetus = a.age - b.age;
      return perMetus;
      // jei metai lygus isrikiuju nua a iki z
    } else {
      let perVarda = a.name.localeCompare(b.name);
      return perVarda;
    }
  });
  return arr;
}

console.table(isrikiuoti(zmones));

// 11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true
