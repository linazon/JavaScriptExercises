// Loops o bucles

// for

for(let i = 0; i < 5; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5,6,7,8]

for(let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

//while

let i = 0
while (i < 5){
    console.log(`Hola ${i}`)
    i++
}

//Bucle infinito
// while(true){
//}  // usar break


// do while
// hace una ejecucion antes de inciiar el ciclo si no 
// cumple con la condicion

i = 6
do {
     console.log(`hola ${i}`)
} while (i < 5)

// for of

const myArray = [1,2,3,4,5]

let librosSet = new Set(["harry potter", "como agua para chocolate", 
    "apocalipsis", "it", "la torre oscura"])

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

const myString ="¡Hola, Javascript!"

for (let value of myArray){
    console.log(value)
}

for (let value of librosSet){
    console.log(value)
}

for (let value of mesesMap){
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}

// Break y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}