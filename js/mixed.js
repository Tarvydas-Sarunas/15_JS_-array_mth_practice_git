"use strict";
console.log("mixed.js file was loaded");

const mixedArray = [
  "banana",
  1,
  "giraffe",
  "pizza",
  true,
  2,
  false,
  "unicorn",
  7,
  "laughter",
  true,
  "and",
  3,
];

// sukurti funkcija kuri ima masyva kaip argument
// a; gauna visu jo skaiciu suma
// b; gauna visu jo skaiciu vidurky

/**
 *
 * @param {(string | number | boolean)[]} arr
 */
function calculateFromArr(arr) {
  let suma = 0;
  // sukti cikla per masyva
  arr.forEach((elementas) => {
    // patikrinti ar tipas yra sk
    if (typeof elementas === "number") {
      // jei sk tai sudeti su kazkuo
      suma += elementas;
    }
  });
  return suma;
}
console.log(calculateFromArr(mixedArray));
