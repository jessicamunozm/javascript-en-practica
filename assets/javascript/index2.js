// COLORES
// boton 1 #e53e3e
// boton 2 #dd6b20
// boton 3 #faf089
// boton 4 #48bb78
// boton 5 #81e6d9
// boton 6 #d53f8c

// TRAIGO LOS BOTONES
let boton1 = document.querySelector("#btn-1")
let boton2 = document.querySelector("#btn-2")
let boton3 = document.querySelector("#btn-3")
let boton4 = document.querySelector("#btn-4")
let boton5 = document.querySelector("#btn-5")
let boton6 = document.querySelector("#btn-6")

let btnReset = document.querySelector("#btn-reset")

// ...Y LA CAJA
let caja = document.querySelector("#caja")

boton1.addEventListener("click", () =>{;
caja.style.backgroundColor = "#e53e3e";
})

boton2.addEventListener("click", () =>{;
caja.style.backgroundColor = "#dd6b20";
})

boton3.addEventListener("click", () =>{;
caja.style.backgroundColor = "#faf089";
})

boton4.addEventListener("click", () =>{;
caja.style.backgroundColor = "#48bb78";
})

boton5.addEventListener("click", () =>{;
caja.style.backgroundColor = "#81e6d9";
})

boton6.addEventListener("click", () =>{;
caja.style.backgroundColor = "#d53f8c";
})

btnReset.addEventListener("click", () => {
caja.style.backgroundColor = "";
});