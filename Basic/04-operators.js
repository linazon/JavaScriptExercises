let a = 5
let b = 10

// Operadores aritmeticos

console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // Multiplicacion 
console.log(a / b) // Division

console.log(a % b) // Modulo
console.log(a ** b) // Exponente

a++ // Incremento de a 1
console.log(a)

b-- // Decremento de a 1
console.log(b)

//Operadores de asignacion

let myVariable = 2
console.log(myVariable)

myVariable += 3 // Suma con asignacion
console.log(myVariable)

myVariable -= 3  // Resta con asignacion
myVariable *= 3  // Multiplicacion con asignacion
myVariable /= 3  // Division con asinacion
myVariable %= 3 // Modulo con asignacion
myVariable **= 3 // Exponencial con asignacion

// Operadores de comparacion
a = 5
b = 10
console.log(a > b) // mayor que // false
console.log(a < b) // menor que -- true
console.log(a >= b) // mayor o igual que -- false
console.log(a <= b) // menor o igual que -- true
console.log(a == b) // Igualdad por valor
console.log(a == 5) // true
console.log(a == "5") // true
console.log(a === "5") // false- Igualdad por identidad (tipo y valor)
console.log(a === 5) // true
console.log(a != 6) // desigualdad por valor - true
console.log(a !== "5") // true
console.log(0 == false) // true
console.log(1 == true) // true
console.log(2 == false) // false
console.log(3 == false) // false
console.log(0 == "") // true
console.log(0 == " ") // true
console.log(0 == '') // true
console.log(0 == "Hola") // false
console.log(0 === "") // false
console.log(undefined == null) // true
console.log(undefined === null) // false

/*
Truthy values (valores verdaderos)

-Solo el numero 1
- Todas las cadenas de texto menos las vacias
- El boolean true

Falsy values (valores falsos)

- 0
- null
- undefined
- NaN (Not a number)
- El boolean false
- Cadenas de texto vacias

*/

// and (&&)
console.log(5 > 10 && 15 > 20) // false
console.log(5 < 10 && 15 < 20) // true
console.log(5 < 10 && 15 > 20) // false
console.log(5 > 10 && 15 > 20 && 30 > 40) // false
console.log(5 < 10 && 15 < 20 && 30 < 40) // true

// or (||)
console.log(5 > 10 || 15 > 20) // false
console.log(5 < 10 || 15 < 20) // true
console.log(5 < 10 || 15 > 20) // true
console.log(5 > 10 && 15 < 20 || 30 < 40) // true

// not (!)
console.log(!true) // false
console.log(!false) // true
console.log(!(5 > 10 && 15 < 20 || 30 < 40)) // false


// Operadores ternarios
const isRaining = false
 isRaining ? console.log("Si, está lloviendo") : console.log("No, no está lloviendo")