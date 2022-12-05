let user = {Nombre: "", Apellido: "Pacheco", Edad: 38, Profesion: ""};

function revisarVacio(objeto){
    for(const prop in objeto){
        if (objeto[prop] === ""){
            alert(`${prop} está vacío`)
        }
    }
}