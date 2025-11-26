// 1. Crea un array que almacene cinco animales
let animales = ["Gato", "perro", "raton", "loro", "topo"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("serpiente")
animales.push("tucan")

console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros
let librosSet = new Set(["harry potter", "como agua para chocolate", 
    "apocalipsis", "it", "la torre oscura"])

    console.log(librosSet)

// 5. Añade dos más. Uno de ellos repetido
librosSet.add("uno")
librosSet.add("uno")
librosSet.add("next")

console.log(...librosSet)

// 6. Elimina uno concreto a tu elección
librosSet.delete("la torre oscura")
console.log(...librosSet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let mesesMap = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "novimebre"],
    [12, "diciembre"]
]) 

console.log(mesesMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(`${mesesMap.has(5)} ${mesesMap.get(5)}`)

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mesesMap.set("verano", ["julio", "agosto", "septiembre"])
console.log(...mesesMap)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let nombresArray = ["Lina", "nury", "carlos", "david"]
console.log(`${nombresArray}`)

let nombresSet = new Set(nombresArray)
console.log(nombresSet)

let personas = new Map([
    ["nombres", nombresSet]
])

console.log(...personas)
console.log(personas.get("nombres"))