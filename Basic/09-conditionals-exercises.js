// if/else/else if/ternaria


// 1. Imprime por consola tu nombre si una variable toma su valor
let option = 3

if(option = 1){
    console.log("Nury Pineda")
}else if ( option = 3){
    console.log("Lina Garzon")
}else{
    console.log("No existe el nombre")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "pepita"
let contraseña = "Contraseña2025"

if(usuario == "pepita" && contraseña == "Contraseña2025"){
    console.log("El usuario y contraseñas son correctos")
}else {
    console.log("El usuario o contraseña son incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -1

if(numero > 0){
    console.log("número positivo")
}else if (numero < 0){
    console.log("número negativo")
}else{
    console.log("el numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 19

if (edad >= 18){
    console.log("La persona es mayor de edad")
}else{
    let faltan 
    faltan = 18 - edad 
    console.log(`faltan ${faltan} años para cumplir la mayoria de edad`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edadP = 17 
let persona = edadP >= 18 ? "adulto" : "menor"

console.log(`persona ${persona}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "julio"

if (mes == "enero" || mes == "febrero" || mes == "marzo"){
    console.log("La estacion es Primavera")
}else if (mes == "abril" || mes == "mayo" || mes == "junio"){
    console.log("La estacion es verano")
}else if (mes == "julio" || mes == "agosto" || mes == "septiembre"){
    console.log("la estacion es otoño")
}else{
    console.log("la estacion es invierno")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let diasMes
switch(mes){
    case "enero":
        diasMes = 31
        break
    case "febrero":
        diasMes = 28
        break
    case "marzo":
        diasMes = 31
        break
    case "abril":
        diasMes = 30
        break
    case "mayo":
        diasMes = 31
        break
    case "junio":
        diasMes = 30
        break
    case "julio":
        diasMes = 31
        break
    case "agosto":
        diasMes = 31
        break
    case "septiembre":
        diasMes = 30
        break 
    case "octubre":
        diasMes = 31
        break
    case "noviembre":
        diasMes = 31
        break
    case "diciembre":
        diasMes = 31
        break
    default:
    console.log("no existe el mes")
}

console.log(`el mes ${mes} tiene ${diasMes} dias`)