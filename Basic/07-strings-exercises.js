// 1. Concatena dos cadenas de texto

let juego1 = "Silksong"
let juego2 = "Winter Burrow"
let total = `He comprado 2 juegos ultimamente ${juego1} y ${juego2}, 
no estoy segura de cual me gusta mas`

console.log(total)

// 2. Muestra la longitud de una cadena de texto

console.log(total.length)

// 3. Muestra el primer y último carácter de un string

console.log(total[0])
console.log(total[total.length-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(total.toUpperCase())
console.log(total.toLowerCase())

// 5. Crea una cadena de texto en varias líneas



// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(total.replaceAll(` `, `-`))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(total.includes("Assasins Creed"))
console.log(total.includes("Silksong"))

// 9. Comprueba si dos strings son iguales

console.log(juego1 == juego2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(juego1.length == juego2.length)