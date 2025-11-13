// 1. Crea una variable para cada operación aritmética
let suma = 5 + 8
let resta = 8 - 5
let multiplicacion = 10 * 5
let division = 20 / 8
let modulo = 20 % 8
let potencia = 5 ** 2

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(potencia)

potencia++
modulo--

console.log(potencia)
console.log(modulo)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 5
resta -= 2
multiplicacion *= 2
division /= 5
modulo %= 2
potencia **=5

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(potencia)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 < 8)
console.log(30 > 15)
console.log(15 <= 15)
console.log(20 >= 12)
console.log("6" == 6)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 > 8)
console.log(30 < 15)
console.log(15 >= 16)
console.log(20 <= 12)
console.log(6 === "6")


// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

let edadMadre = 61
let edadHija = 31

edadMadre > edadHija ? console.log("la madre es mayor a la hija") : console.log("la hija es mayor a la madre")

// 10. Combina operadores aritméticos, de comparáción y lógicas

