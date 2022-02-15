import { numbers } from "./data.js"

// El primer parámetro es para decirle qué dato va a remplazar, los otros 2 son para ver el primer y último índice
const testFill = numbers.fill(1, 3, 9)

console.log('Numbers:', numbers)
console.log(`Test Fill:`, testFill)