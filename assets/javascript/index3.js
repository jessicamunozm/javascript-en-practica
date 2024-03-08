// ELEMENTOS DEL HTML

// AGREGARLE RESULTADO DE CÁLCULO, SI RESTA ES NEGATIVA DEBE INDICAR 0
let result = document.querySelector(".resultado")

// INPUTS DE NÚMEROS
let input1 = document.querySelector("#valor1")
let input2 = document.querySelector("#valor2")


// ERRORES EN PÁRRAFOS: VALIDACIÓN SOLO NÚMEROS (SIN ESPACIOS NI LETRAS)
let error1 = document.querySelector("#error1")
let error2 = document.querySelector("#error2")

// BOTONES
let btnSum = document.querySelector("#btnS")
let btnRest = document.querySelector("#btnR")


// VALIDACIÓN NÚMEROS

// EVENTO CLICK AL BOTÓN DE SUMA
btnSum.addEventListener("click", () => {
let inp1 = input1.value.trim();
let inp2 = input2.value.trim();
// VALIDACIÓN SOLO NÚMEROS CON REGEXP
let validacion = /^[0-9]+$/;
// RESPUESTA ANTE INPUT 1 VACÍO O SIN NÚMEROS
if (inp1 === "" || !validacion.test(inp1)) {
error1.innerHTML = "Debes ingresar un número";
} else {
// SI ESTÁ CORRECTO NO MOSTRAR MENSAJE:
error1.innerHTML = "";
}

// RESPUESTA ANTE INPUT 2 VACÍO O FALSE CON NÚMEROS
if (inp2 === "" || !validacion.test(inp2)) {
error2.innerHTML = "Debes ingresar un número";
// SI ESTÁ CORRECTO NO MOSTRAR MENSAJE:
} else {
error2.innerHTML = "";

// SI NO HAY MENSAJE DE ERROR EN LOS INPUTS, ENTREGA EL RESULTADO DE LA SUMA CON LOS VALORES PARSEADOS DE LOS INPUTS
if (inp1 !== "" && validacion.test(inp1) && inp2 !== "" && validacion.test(inp2)) {
let suma = parseInt(inp1) + parseInt(inp2);
result.innerHTML = suma;
}}}) 


// AHORA LO MISMO PERO CON EL BOTÓN RESTA
btnRest.addEventListener("click", () => {
let inp1 = input1.value.trim();
let inp2 = input2.value.trim();

let validacion = /^[0-9]+$/;

if (inp1 === "" || !validacion.test(inp1)) {
error1.innerHTML = "Debes ingresar un número";
} else {
error1.innerHTML = "";
}

if (inp2 === "" || !validacion.test(inp2)) {
error2.innerHTML = "Debes ingresar un número";
} else {
error2.innerHTML = "";
}

// SI NO HAY MENSAJE DE ERROR EN LOS INPUTS, ENTREGA EL RESULTADO DE LA RESTA CON LOS VALORES PARSEADOS DE LOS INPUTS
if (inp1 !== "" && validacion.test(inp1) && inp2 !== "" && validacion.test(inp2)) {
let resta = parseInt(inp1) - parseInt(inp2);

// IF PARA RESTA NEGATIVA
if (resta < 0) {
resta = 0;
}
result.innerHTML = resta;
    }
});