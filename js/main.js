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
