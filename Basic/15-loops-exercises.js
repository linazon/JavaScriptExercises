// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

let i = 1;
while ( i <= 20){
    console.log(`numero ${i}`)
    i++
}


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let a = 0
let suma = 0
while(a < 100){
    a++
    suma += a
    console.log(`numero ${a} suma ${suma}`)
}

suma = 0
for(let a = 1; a <= 100; a++){
    suma += a
    console.log(`con for numero ${a} suma ${suma}`)
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i = 2; i <= 50; i += 2){
    console.log(i)
}

a = 2

while (a <= 50){
    console.log("con while " + a)
    a += 2
}

a = 2
do{
console.log("con do while "+ a)
a += 2
} while(a <= 50 )


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["lina", "Katherine", "nury", "amelia", "meredith", "luis", "fredy"]

for (let nombre of nombres){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "esto es una frase con vocale, gato perro gordo y arya"
texto.toLowerCase()
let vocales = ["a", "e", "i", "o", "u"]
let cont = 0
for (let letra of texto){
    if(vocales.includes(letra)){
        cont++
    }
}
console.log(cont)
                    // forma vieja
                    texto = "el murcielago es lindo"
                    texto.toLowerCase
                    cont = 0
                    for (let letras of texto){
                        switch(letras){
                            case "a":
                            case "e":
                            case "i":
                            case "o":
                            case "u":
                                cont++
                            break
                            default:
                                cont += 0
                            break
                        }
                    }
                    console.log(cont)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arrayNum = [5,4,8,6,2,15,24,7]
let total6 = 1;
for(let valNumber of arrayNum){
    total6 *= valNumber
    console.log(`Hasta el momento el total es ${total6} y el array va en ${valNumber}`)
}
console.log(`Gran total ${total6}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let base7 = 1
let mul7
do{
    mul7 = 5 * base7
    console.log(`5 x ${base7} = ${mul7}`)
    base7++
}while(base7 <= 10)

// 8. Usa un bucle para invertir una cadena de texto
let mascotas = "Gordo y Arya"
let nuevoText = ""
for(let i = mascotas.length-1; i >= 0; i--){
    nuevoText += mascotas[i] 
}
console.log(nuevoText)

 mascotas = "Gordo y Arya";
 nuevoText = "";

for (let letra of mascotas) {
    nuevoText = letra + nuevoText;
}

console.log(nuevoText);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = 1
let fibonacciNuevo = 1
while(fibonacci <= 80){
fibonacciNuevo += fibonacci
    console.log(fibonacci)
    if(fibonacciNuevo > 2){
        fibonacci = fibonacciNuevo - fibonacci
    }
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
arrayNum = [50,45,2,7,-5,60,8,0,90]
let newArray = []
for(let num of arrayNum){
    if(num >= 10){
        newArray.push(num)
    }
}
console.log(newArray)
