const root = document.getElementById("root");
const listaUsuariosUI = document.getElementById("listaUsuarios");

let usersTemp = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
];

let users = [];
console.log(users, "Superefe")

users = JSON.parse(localStorage.getItem("rutinaUsuarios"));

if(users == null){
  localStorage.setItem("rutinaUsuarios", JSON.stringify(usersTemp));
}


//LOCALSTORAGE


const GuardarDB = () => {
  //como no se pueden guardar array en localstorage, convertimos nuestro array en JSON y de esta manera localstorage puede almacenar nuestras actividades
  console.log(users,' antes de enviar a guardar uno');
  localStorage.setItem("rutinaUsuarios", JSON.stringify(users));
  construirCuerpo(); // cada vez que guardemos un elemento, la pantalla debe pintarse nuevamente
};

const PintarDB = () => {
  listaUsuariosUI.innerHTML = "";
  //leemos el JSON del localstorage y parseamos a array para poder realizar una lectura de el y mostrar en pantalla
  //console.log(arrayActividades)
  console.log(users,'users locales');
  if (users === null) {
    users = []; //cuando el localstorage este vacio, definir el array como vacio
    listaUsuariosUI.innerHTML = `
        <div class="alert alert-primary" role="alert">
            <b>Lista Vacia</b>
        </div>
        `;
  } else {
    users.forEach((element) => {
      (listaUsuariosUI.innerHTML += `
        <div class="alert alert-success" role="alert">
            <b>${element.nombre}</b> - ${element.apellido} - ${element.edad} - ${element.profesion}
        </div>
      `);
    });
  }
};

document.addEventListener("DOMContentLoaded", crearTabla);


// READ

const seccionUsers = document.createElement("section");
seccionUsers.classList.add("container", "mt-5");
root.append(seccionUsers);

const tabla = document.createElement("table");
tabla.classList.add("table");
tabla.classList.add("border");
tabla.classList.add("border-2");
seccionUsers.append(tabla);
crearTabla();
function crearTabla() {
  tabla.innerHTML = "";
  const thead = document.createElement("thead");
  tabla.append(thead);
  crearCabezadoUsuarios();
  construirCuerpo();
}


function construirCuerpo() {
  let usersTemp = JSON.parse(localStorage.getItem("rutinaUsuarios"));
  for (const index in usersTemp) {
    const tr = document.createElement("tr");
    for (const key in usersTemp[index]) {
      const td = document.createElement("td");
      td.classList.add("px-3");
      td.textContent = usersTemp[index][key];
      tr.append(td);
    }
    tabla.append(tr);
  }
}



function crearCabezadoUsuarios(){
  const encabezados = document.createElement("thead");
  const tr = document.createElement("tr");

  for (const key in users[0]){
      const th = document.createElement("th")
      th.textContent = capitalizarPalabra(key);
      th.style.cursor = "pointer";
      th.addEventListener("click", () =>{
          ordenarPorArgumento(key);
          tabla.innerHTML = ""
          tabla.append(encabezados)
          construirCuerpo()
      });
      tr.append(th)
  }

  encabezados.append(tr);
  tabla.append(encabezados);
  }


  function capitalizarPalabra(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
  }


// // CREATE



// Función para crear usuarios nuevos
function crearDatosUsuario() {
  let datosUsuario = prompt("Ingrese la información del usuario (nombre, apellido, edad, profesión)");

  if(datosUsuario !== null){
    let usuarioArray = datosUsuario.split(",");
    let fecha = new Date;
    let usuario = {id: users.length + 1}
    usuario.nombre = usuarioArray[0];
    usuario.apellido = usuarioArray[1];
    usuario.edad = usuarioArray[2];
    usuario.profesion = usuarioArray[3];
    usuario.created_at = fecha.toISOString();
    users.push(usuario);
    GuardarDB();
  }
  return users;
}



//Botón Agregar
const crearUsuario = document.createElement("section");
seccionUsers.append(crearUsuario);
const btnCrear = document.createElement("button");
btnCrear.classList.add("btn", "btn-primary");
btnCrear.textContent = "Crear Usuario";
crearUsuario.append(btnCrear);
btnCrear.addEventListener("click", () => {
  crearDatosUsuario(users);
  crearTabla();
  saveInLocalStorage();
});



// Victor


function saveInLocalStorage() {
    //como no se pueden guardar array en localstorage, convertimos nuestro array en JSON y de esta manera localstorage puede almacenar nuestros usuarios
    console.log(users,'usuarios antes de json');
    localStorage.setItem("rutinaUsuarios", JSON.stringify(users));
  };


// UPDATE

function modificarDatos(argumento) {
  let id = prompt(`Ingrese el id del usuario`);
  if (id == "") {
    return "Para modificar debes ingresar el id";
  }
  let usuario = users;
  argumento.forEach((user, i) => {
    if (user.id == id) {
      usuario[i].nombre = prompt(`Nombre es:`);
      usuario[i].apellido = prompt(`Apellido es:`);
      usuario[i].edad = prompt(`Edad es:`);
      usuario[i].profesion = prompt(`Profesión es:`);
      usuario[i].fechaActualizacion = new Date();
    }
  });
  users = usuario;
  localStorage.setItem("rutinaUsuarios", JSON.stringify(users));
  return users;
}

//Botón Modificar
const modificar = document.createElement("section");
seccionUsers.append(modificar);
const btnModificar = document.createElement("button");
btnModificar.classList.add("btn", "btn-primary","m2");
btnModificar.textContent = "Modificar";
modificar.append(btnModificar);
btnModificar.addEventListener("click", () => {
  modificarDatos(users);
  crearTabla();
});



// DELETE

// const btnBorrar = document.createElement("button");
// btnBorrar.classList.add("btn", "btn-danger");
// btnBorrar.textContent = "Borrar registro";
// crearUsuario.append(btnBorrar);

// btnBorrar.addEventListener("click", deleteUser);

// function deleteUser(){
//   let id = prompt("Ingrese el id del registro que desea borrar:");
//   if(id){
//     let registro = users.find(user => user.id == id);
//     if(registro) {
//       if (confirm("¿Está seguro de que desea eliminar el registro?")){
//         users = users.filter(user => user.id != id);
//         tabla.innerHTML = "";
//         crearTabla();
//         alert("Registro eliminado exitosamente");
//       }
//     } else {
//       alert("No se encontró ningún registro con ese id");
//     }
//   }
// }




//Botón Eliminar
const eliminar = document.createElement("section");
seccionUsers.append(eliminar);
const btnEliminar = document.createElement("button");
btnEliminar.classList.add("btn","btn-danger");
btnEliminar.textContent = "Eliminar";
eliminar.append(btnEliminar);
btnEliminar.addEventListener("click", () => {
  const id = prompt("Ingresa el ID del registro que deseas eliminar:")
  let confirmar = prompt("¿Estás seguro de querer eliminar el registro? ingrese (Si)")
  if(confirmar = "Si"){
      users = eliminarDatos(id);
  }else{
      return
  }
  // eliminarDatos(users);
  crearTabla();
});

function eliminarDatos(id){
  let usersAux = users.filter((argumento) => argumento.id != id);
  localStorage.setItem("rutinaUsuarios", JSON.stringify(usersAux));
  return usersAux;
}






// ADICIONAL

var ordenAscendente = true; // Variable para llevar la cuenta del orden actual

function ordenarPorArgumento(property) {

  // Creamos la función de comparación que se usará en el método sort()

  function comparar(a, b) {
    if (ordenAscendente) {
      // Ordenamos de menor a mayor
        if (typeof users[0][property] === "string"){ // Si es un string
            console.log('is an string')
            return a[property].localeCompare(b[property])

        } else if (typeof users[0][property] === "number"){ // Si es un número
            console.log('is a number');
            return a[property] - b[property]

        } else {
            return "Por favor utiliza un atributo válido"
        }
    } else {
      // Ordenamos de mayor a menor
        if (typeof users[0][property] === "string"){ // Si es un string
            console.log('is an string')
            return b[property].localeCompare(a[property])

        } else if (typeof users[0][property] === "number"){ // Si es un número
            console.log('is a number');
            return b[property] - a[property]

        } else {
            return "Por favor utiliza un atributo válido"
        }
    }
  }

  // Ordenamos el array usando el método sort() y la función de comparación creada
  users.sort(comparar);

  // Cambiamos el valor de la variable para llevar la cuenta del próximo orden
  ordenAscendente = !ordenAscendente;
}
