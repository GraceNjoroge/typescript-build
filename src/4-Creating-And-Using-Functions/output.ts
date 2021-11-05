import { productsURL } from '../lib';

const prefix = '🐉 ';


export default async function updateOutput(id: string = 'output') {

}

learningSamplesrunning();

function learningSamplesrunning() {
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`)
  }
  displayProductInfo(10, 'Pizza');


  function addNumbersDeclaration(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }
  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 11));


  const addNumbersExpression = function (x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }
}

