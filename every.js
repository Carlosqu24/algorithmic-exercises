import { numbers } from "./data.js";

// Valida cada uno de los elementos a ver si cumple con la condición. Con que uno no la cumpla, retorna un false
// const testEvery = fruits.every( fruit => fruit.price < 3.5 )
// console.log(testEvery)

const testNumbers = numbers.every(number => number < 10)
console.log('Test Numbers:',  testNumbers)