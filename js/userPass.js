let usuarios;
let contraseña;

const user = document.getElementById('txtUsuario');
const password = document.getElementById('txtPwd');

const btnIngresar = document.getElementById('btnIngresar')


btnIngresar.onclick = function(){
    usuarios = user.value;
    contraseña = password.value;

    if(usuarios == "jperez" && contraseña == "123456" || usuarios == "amaria" && contraseña == "certus123"){
        alert("Datos ingresados correctamente");
    }else{
        alert("Acceso inválido. Por favor, ingrese los datos correctos")
    }
}