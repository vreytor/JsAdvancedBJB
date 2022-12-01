//Capturando elementos del DOM

const nombre = document.getElementById("txtNombre");
const valnombre = document.getElementById("valNombre");

const correo = document.getElementById("txtCorreo");
const valcorreo= document.getElementById("valCorreo");

const password = document.getElementById("password");
const valpass = document.getElementById("valPassword");

const rptPassword = document.getElementById("rptPassword");
const valPass = document.getElementById("valRptPass");

const btnEnviar = document.getElementById("btnEnviar");

function Validar(){
    let nom = nombre.value;
    let expRegNom = new RegExp("^[a-zA-Z0-9_]{4,16}$");
    valnombre.innerText ="";

    let icorreo = correo.value;
    let expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    valcorreo.innerText ="";

    let ipass = password.value;
    let expRegPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; /* /^[a-zA-Z0-9_@.#%&$/]{4,16}$/ */ 
    valpass.innerText ="";
    
    let iRpass = rptPassword.value;

    if(nom == "" || !expRegNom.test(nom)){
    valnombre.innerText = "El usuario tiene que ser de 4 a 16 digitos y solo puede contener números, letras y guion bajo";
    }
    if(icorreo == "" || !expRegEmail.test(icorreo)){
    valcorreo.innerText = "Correo no valido";
    }
    if(ipass == "" || !expRegPass.test(ipass)){
    valpass.innerText = "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un dígito numérico y un carácter especial";
    }
    if(iRpass == ipass){
        valPass.innerText = "";
    }else{
        valPass.innerText = "Las contraseñas deben ser iguales";
    }
}

btnEnviar.onclick = () => Validar();