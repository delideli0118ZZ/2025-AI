/*
for (let i = 3; i < 101; i = i + 3) {
  console.log(i);
}

let j = 0;
for (let i = 1; i < 101; i = i + 1) {
  j = j + i;
}
console.log(j);

let o = 0;
for (let i = 1; i < 101; i = i + 2) {
  o = o + i;
}
console.log(o);

let g = 2;
for (let i = 1; i < 10; i = i + 1) {
  console.log(g * i);
}
*/

import prompt from "prompt-sync";
let a = prompt();
let b = a("입력해주세요: ");
console.log(b);

let g = b;
for (let i = 1; i < 10; i = i + 1) {
  console.log(g * i);
}
