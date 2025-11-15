// Declaracion

let mySet = new Set()

console.log(mySet)

//Inicializacion
mySet = new Set(["Nury", "Pineda", "Kathe", 37, true, "pablo", "carlos"])

console.log(mySet)

// Metodos comunes

// add y delete 
// En delete devuelve un true o false si, si encuentra el elemento a borrar
mySet.add("htttp://lina.com")

console.log(mySet)

console.log(mySet.delete("htttp://lina.com"))
console.log(mySet)

//Has

console.log(mySet.has("Pineda"))
console.log(mySet.has("gordo"))

// size
console.log(mySet.size)

// Convertir Set en array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a Set
 mySet = new Set(myArray)
 console.log(mySet)

 // No admite duplicados
 
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(...mySet)   /// los 3 puntos es para mostrar el Set completo

