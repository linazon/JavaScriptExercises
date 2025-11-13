// Cadenas de texto

//Concatenacion
let myName = "Kathe"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof(greeting))

//Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

//Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola")) // indice - 0
console.log(greeting.indexOf("Kathe")) // 6
console.log(greeting.indexOf("ERROR")) // -1 porque no existe
console.log(greeting.includes("Hola"))  // Pregunta si existe esa palabra en la cadena
console.log(greeting.includes("Kathe")) // true
console.log(greeting.includes("ERROR")) // false
console.log(greeting.slice(0 , 10)) // Devuelve la sesion desde la posicion 0 a 9
console.log(greeting.replace("Kathe", "Fredy"))

// Template literals (plantillas literales)

//String en varias lineas

let message = `Hola, este 
es mi
curso de 
Javascript`
console.log(message)

// Interpolacion de valores
let email = "correo@gmail.com"

// alt + 96
console.log(`Hola, ${myName}! Tu email es ${email}.`)