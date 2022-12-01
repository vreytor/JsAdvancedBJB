// DATOS DE ENTRADA Y VARIABLES
// 1-> Seleccionar Elementos del DOM (p, h1, input, etc.)
const numero1 = document.getElementById("montoSol");
const numero2 = document.getElementById("montoDolar");
const boton = document.getElementById("btnSol-Dol");
const boton2 = document.getElementById("btnDol-Sol");
const dolares = document.getElementById("dolares");
const soles = document.getElementById("soles");
const limpiar = document.getElementById("btnLimpiar");
const tcambio = 3.84;

//FUNCIÓN SOLES A DOLARES
boton.onclick = function(){
// 3-> Definir datos de entrada y variables para realizar el proceso
    let num1=0;
    let cambio=0;
//Proceso
    num1 = parseFloat(numero1.value);    
    cambio = num1 / tcambio;
//Resultado
    dolares.value = "$ " + cambio.toFixed(2);
    dolares.disabled = true;
}

//FUNCIÓN DOLARES A SOLES
boton2.onclick = function(){
// 3-> Definir datos de entrada y variables para realizar el proceso
    let num2=0;
    let cambio2=0;
//Proceso
    num2 = parseFloat(numero2.value);    
    cambio2 = num2 * tcambio;
//Resultado
    soles.value = "S/ " + cambio2.toFixed(2);
    soles.disabled = true;
}

//FUNCIÓN LIMPIEZA
limpiar.onclick = function(){
    numero1.value = "";
    numero2.value = "";
    dolares.value = "";
    soles.value = "";
    dolares.disabled = false;
    soles.disabled = false;
}