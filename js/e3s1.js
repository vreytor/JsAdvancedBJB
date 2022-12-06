let user = {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""};

function revisarVacio(objeto){
    for(const prop in objeto){
        if (objeto[prop] === ""){
            objeto[prop] = prompt(`El dato ${prop} está vacío, por favor ingréselo:`)
        }
    }
    return objeto
}

console.log(revisarVacio(user))