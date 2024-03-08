"use strict";

// EJERCICIO 1

// // TRAIGO EL FORMULARIO
let form = document.querySelector("#formulario")

// TRAIGO LA SECCIÓN NOMBRE
let userName = document.querySelector("#nombre")
let nameE = document.querySelector(".errorNombre")

// TRAIGO LA SECCIÓN ASUNTO
let subject = document.querySelector("#asunto")
let subjectE = document.querySelector (".errorAsunto")

// TRAIGO LA SECCIÓN MENSAJE
let msj = document.querySelector("#mensaje")
let msjE = document.querySelector (".errorMensaje")

// TRAIGO EL BOTÓN
let boton = document.querySelector("#botton")

// TRAIGO EL RESULTADO
let result = document.querySelector(".resultado")

// SECCIÓN NOMBRE
function validarN (event) {

// PREVENTDEFAULT() EVITA ACTUALIZACIÓN POR DEFAULT DE LA PÁGINA AL HACER CLICK EN ENVIAR
event.preventDefault()
let valorN = userName.value.trim();

// EXPRESIÓN REGULAR PARA ACEPTAR SOLO LETRAS Y ESPACIOS
let patronN =  /^[a-zA-Z\s]+$/

// PARA NO VALIDAR SI EL ESPACIO ESTÁ VACÍO
if (valorN === "") {
nameE.innerHTML = "El nombre es requerido"

// PARA NO VALIDAR SI EL CONTENIDO NO SON LETRAS 
} else if (!patronN.test(valorN)) {
nameE.innerHTML = "El nombre debe contener solo letras y espacios";
// PARA QUE DESAPAREZCA EL MENSAJE DE ERROR AL INTRODUCIR LETRAS
} else {
nameE.innerHTML = "";
}}

boton.addEventListener("click", validarN)
// FIN SECCIÓN NOMBRE

// SECCIÓN ASUNTO

function validarS (event) {
// AGREGUÉ EL Event.PREVENTDEFAULT() PORQUE AL HACER CLICK LA PÁGINA SE ACTUALIZABA Y BORRABA EL MENSAJE
event.preventDefault()
let valorS = subject.value.trim();
// PARA VALIDAR SI EL ESPACIO ESTÁ VACÍO
if (valorS === "") {
subjectE.innerHTML = "El asunto es requerido"
// PARA QUE DESAPAREZCA EL MENSAJE DE ERROR AL INTRODUCIR LETRAS
} else {
subjectE.innerHTML = "";
} }

boton.addEventListener("click", validarS)
// FIN SECCION ASUNTO


// SECCIÓN MENSAJE

function validarM (event) {
// AGREGUÉ EL Event.PREVENTDEFAULT() PORQUE AL HACER CLICK LA PÁGINA SE ACTUALIZABA Y BORRABA EL MENSAJE
event.preventDefault()
let valorM = msj.value.trim();
// PARA VALIDAR SI EL ESPACIO ESTÁ VACÍO
if (valorM === "") {
msjE.innerHTML = "El mensaje es requerido"
// PARA QUE DESAPAREZCA EL MENSAJE DE ERROR AL INTRODUCIR LETRAS
} else {
msjE.innerHTML = "";
} }
    
boton.addEventListener("click", validarM)

// FIN SECCION MENSAJE

// SECCIÓN ENVIADO CON ÉXITO
function validarT(event) {
event.preventDefault();
// VERIFICAR QUE CAMPOS DE ERROR ESTÉN VACÍOS, SI HAY UN ERROR NO SE EJECUTA
if (nameE.innerHTML === "" && subjectE.innerHTML === "" && msjE.innerHTML === "") {
result.innerHTML = "Mensaje enviado con éxito";
// BORRA CONTENIDO DESPUÉS DE ENVIAR FORMULARIO
} else {
result.innerHTML = "";
}
}

boton.addEventListener("click", validarT);