"use strict";
console.log("main.js file was loaded");

const mainArr = [2, 12.5, 33, -7.2, 28, 49, -17, 19.9, 42, -14.45, -10, 20];

// grazinti nauja masyva pakelti masyvo narius kvadratu

let kvadratuArr = mainArr.map((sk) => {
  let skPakeltasKv = sk * sk;
  skPakeltasKv = Math.pow(sk, 2);
  skPakeltasKv = sk ** 2;
  // console.log("skPakeltasKv ===", skPakeltasKv);
  return skPakeltasKv;
});
kvadratuArr = mainArr.map((sk) => sk * sk);
console.log("kvadratu ===", kvadratuArr);

// Atrinkti tiktai lyginių skaičių masyvą
const lyginiai = mainArr.filter((sk) => sk % 2 === 0);
console.log("lyginiai ===", lyginiai);

// Visas neigiamas vertes masyve padaryti teigiamomis

const onlyPositivsArr = mainArr.map((sk) => {
  // kiekviena reiksme tikrinti ar maziau uz 0
  if (sk < 0) {
    // jei taip tai * -1 kad butu pliusinis
    let kint = sk * -1;
    // grazinti reiksme
    return kint;
  } // ir grazinti likusius skaicius kurie jau teigiami
  return sk;
});
console.log("onlyPositivsArr ===", onlyPositivsArr);

// Atrinkti kas penktą elementą

// panaudoti filter
// viduje mes tikriname ar index yra 5 kartotinis (idx % 5 === 0)
const kasPenktas = mainArr.filter((sk, idx) => idx % 5 === 0);
// jei yra tai atrenkame jei ne praleidziame
console.log("kasPenktas ===", kasPenktas);

// Sukurti funkciją, kuri ima masyvą ir atspausdina kiek- vieną jo reikšmę atskirai: [0] => 2. [1] => 12. [2] => 33. (nieko negrąžina)

/**
 *
 * @param {number[]} arr
 */
function printArray(arr) {
  arr.forEach((sk, idx) => {
    //
  });
}
