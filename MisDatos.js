console.log("Bienvenido a mis datos");
const nombreCompleto = "Lina Katherine Garzón Pineda";
var edad = 30;
const automatizadora = true;
let ciudad = "Bogota";
let Perro = null;

console.log(`Nombre completo ${nombreCompleto} y el tipo es `, typeof(nombreCompleto));
console.log(`Edad ${edad} y el tipo de dato es `, typeof(edad));
console.log(`Soy automatizadora? ${automatizadora} y el tipo de dato es `, typeof(automatizadora));
console.log(`Y sot de la ciudad de ${ciudad} y el tipo de dato es `, typeof(ciudad));
console.log(`¿Tengo perro? ${Perro} y el dato es `, typeof(Perro));

console.log("\n -------- CONVERSION DE TIPO-----------\n")

let edadTexto = "28";
let edadNumero = parseInt(edadTexto);
console.log(`Edad ${edad} y el tipo de dato es )`,typeof(edad));

let nombrenum = "Lina";
console.log("texto a number: ", Number(nombrenum));