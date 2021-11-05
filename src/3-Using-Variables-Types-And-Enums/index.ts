// string, number, boolean, array, undefined, null, any

let firstName: string | null;
firstName = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);

let productType = 'Groceries'; // homeGoods, grocery ("magic string")
if (productType === 'Sports') {
  console.log('Found sports product type.');
} else if (productType === 'HomeGooods') {
  console.log('Found home goods here.');
} else if (productType === 'Groceries') {
  console.log('Found tomatoes!!.');
}

// Using Enums
enum ProductType {
  Sports,
  HomeGoods,
  Groceries,
}
let pt = ProductType.Sports;
if (pt === ProductType.Sports) {
  console.log('Found sports product type.');
}
