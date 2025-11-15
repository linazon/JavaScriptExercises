// Array

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicializacion

myArray = [3]
myArray2 = new Array(3) // no inicializa, solo indica que 
// tiene 3 espacios aunque vacios

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Metodos comunes

//clear
myArray = [] 
myArray.length = 0 // alternativa

// push, para agregar un elemento al final

myArray.push("Lina")
myArray.push("Garzon")
myArray.push(50)
myArray.push("gatos")

console.log(myArray)

// POP elimina el ultimo y lo devuelve

console.log(myArray.pop()) //gatos
myArray.pop()

console.log(myArray)

// shift Elimina el primero y lo devuelve
console.log(myArray.shift())
console.log(myArray)

//unshift Agregar los elementos al inicio
myArray.unshift("Nury", "Pineda")
console.log(myArray)

// length
console.log(myArray.length)

// slice extrae una porcion del array
myArray = ["Nury", "Pineda", "Kathe", 37, true, "pablo", "carlos"]

let myNewArray = myArray.slice(2,5)

console.log(myArray)
console.log(myNewArray)

//splice elimina una porcion del array
myArray.splice(1,3)
console.log(myArray) //['Nury', true, 'pablo', 'carlos']

myArray = ["Nury", "Pineda", "Kathe", 37, true, "pablo", "carlos"]

myArray.splice(1,3, "reemplazo")
console.log(myArray) //['Nury', 'reemplazo', true, 'pablo', 'carlos']