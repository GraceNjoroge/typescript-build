let x: number = 8;
let y: number = 12;
const sum: number = x + y;
const result: string = `The sum of ${x} and ${y} is ${sum}`;
console.log(result);

const output = document.querySelector('#output');

if (output) {
  output.innerHTML = result;
}


