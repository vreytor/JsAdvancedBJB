const nombre = $("#txtNombre");
const valnombre = $("#valNombre");

const correo = $("#txtCorreo");
const valcorreo = $("#valCorreo");

const celular = $("#txtPhone");
const valcelular = $("#valPhone");

const contrasena = $("#password");
const valcontrasena = $("#valPassword");

const enviar = $("#btnEnviar");

function Validar(){
    console.log("function validar")
    let iusu = $("#txtNombre").val();
    let expRegiUsu = new RegExp("^[a-zA-Z0-9_]{4,16}$");
    $("#valNombre").text('');
    
    let corr = $("#txtCorreo").val()
    let expRegCorr = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    $("#valCorreo").text('');
    
    let celu = $("#txtPhone").val()
    let expRegCelu = new RegExp("^\([0-9]{2}\)[0-9]{3}-[0-9]{3}-[0-9]{3}$");
    $("#valPhone").text('');

    let cont = $("#password").val()
    let expRegCont = new RegExp("^[0-9]{8}$");
    $("#valPassword").text('');



    if(iusu == "" || !expRegiUsu.test(iusu)){
        $("#valNombre").text('El usuario debe tener de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo');
    }    
    if(cont == "" || !expRegCont.test(cont)){ 
        $("#valPassword").text("la contraseña debe contener 8 números");
    }   
    if(corr == "" || !expRegCorr.test(corr)){
        $("#valCorreo").text("Correo no valido");
    }
    if(celu == "" || !expRegCelu.test(celu)){
        $("#valPhone").text("Celular no valido");
    }
}
$("#btnEnviar").click(()=>{
    Validar();
});

// btnEnviar.onclick = () => Validar();