// Funciones

//Simple

function myFunc(){
    console.log("Hola mundo")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parametros

function myFunctionWithParameters(name){
    console.log(`hola ${name}`)
}
myFunctionWithParameters("Kathe")

// funciones anonimas

const unkownFunti = function (name){
    console.log(`Funcion anonima ${name}`)
}

unkownFunti("lero lero")

// Arrow Fuctions
const arrow = (name) => {
    console.log(`Funcion flecha ${name}`)
}

arrow("verde")

// Parametros

function sum(a,b){
    console.log(a + b)
}

sum() //NaN
sum(5) //NaN
sum(5, 5) // 10

// Parametros con valores por defecto

function funDef ( a =1, b = 2){
    console.log(a +b)
}
funDef()
funDef(4)
funDef(undefined, 7)

// Retorno de valores

function mult(a, b){
    return a + b
}

let result = mult(5,8)
console.log(result)

//Funciones anidadas
function externa(){
    console.log("externa")
    function interna(){
        console.log("interna")
    }
    interna()
}

externa()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param){
    func(param)
}

applyFunc(myFunctionWithParameters, "superior")

// foreach
const myArray = [1, 2, 3, 4]

const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach((value) => {
    console.log(value)
})

mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))