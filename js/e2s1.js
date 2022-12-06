let user = {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""};

/* La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está
codificado por cadenas (ignorando los codificados por Símbolos , incluidas las propiedades
enumerables heredadas. */
    
function revisarVacio(objeto){
    for(const prop in objeto){
        if (objeto[prop] === ""){
            alert(`${prop} está vacío`)
        }
    }
}