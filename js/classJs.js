const txtCodigo = document.getElementById("txtCodigo");
const txtNombre = document.getElementById("txtNombre");
const txtApellido = document.getElementById("txtApellido");
const txtCorreo = document.getElementById("txtCorreo");
const selCargo = document.getElementById("selCargo");

const resultado = document.getElementById("resultado");
const resultCargo = document.getElementById("resultCargo");
const resultSueldoBruto = document.getElementById("resultSueldoBruto");
const resultDescuento = document.getElementById("resultDescuento");
const resultSueldoNeto = document.getElementById("resultSueldoNeto");

const btnCalcular = document.getElementById("btnCalcular");


class Empleado {
    codigo;
    nombre;
    apellido;
    correo;
    cargo;

sueldoBruto(){
    let sueldoBruto = 0;
    switch(this.cargo){
        case "Jefe": sueldoBruto = 5000;
        break;

        case "Analista": sueldoBruto = 4000;
        break;

        case "Programador": sueldoBruto = 3000;
        break;

        case "Soporte": sueldoBruto = 2000;
        break;

        case "Asistente": sueldoBruto = 1500;
        break;
    }
    return sueldoBruto;
}

descuento(){
    return this.sueldoBruto() * 0.125;
}

sueldoNeto(){
    return this.sueldoBruto() - this.descuento();
  }
}

btnCalcular.addEventListener("click", () => {
    let cod = txtCodigo.value;
    let nom = txtNombre.value;
    let ape = txtApellido.value;
    let cor = txtCorreo.value;
    let car = selCargo.value;

    let newEmpleado = new Empleado();

    newEmpleado.codigo = cod;
    newEmpleado.nombre = nom;
    newEmpleado.apellido = ape;
    newEmpleado.correo = cor;
    newEmpleado.cargo = car;
   
    resultado.innerText = `${newEmpleado.nombre} ${newEmpleado.apellido}`;

    resultCargo.innerText = `${newEmpleado.cargo}`;
    resultSueldoBruto.innerText = `S/ ` + `${newEmpleado.sueldoBruto().toFixed(2)}`;
    resultDescuento.innerText = `S/ ` + `${newEmpleado.descuento().toFixed(2)}`;
    resultSueldoNeto.innerText = `S/ ` + `${newEmpleado.sueldoNeto().toFixed(2)}`;
});