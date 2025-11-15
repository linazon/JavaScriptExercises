//Map

//Declaracon

let myMap = new Map()

console.log(myMap)

//Inicializacion

myMap = new Map([
    ["name", "Lina"],
    ["email", "linazon94@gmailcom"],
    ["age", 37]
])

console.log(myMap)

//Metodos y propiedades

//set

myMap.set("student", true)
myMap.set("name", "Katherine")

console.log(myMap)

// get busca la llave

console.log(myMap.get("name"))
console.log(myMap.get("suename"))  // undefined porque no existe

// has
console.log(myMap.has("name")) // true
console.log(myMap.has("surname")) //false

//Delete
myMap.delete("email")
console.log(myMap)

// keys, values y entries 
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//size
console.log(myMap.size)

//clear
myMap.clear()
console.log(myMap)