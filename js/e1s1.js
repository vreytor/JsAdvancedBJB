/* Crear una función que convierta los strings que se ingresan como parámetros a estilo capitalizado.
Ejemplo: "hola a todos" => "Hola A Todos" */

let frases = "hola a todos los humanos"

function capitalizar(frase){
    let fraseCortada = frase.split(" ") /* El método split() divide un objeto de tipo String en un array (vector) de
                                           cadenas mediante la separación de la cadena en subcadenas. */
    let newArray = []

    for(let i = 0; i < fraseCortada.length; i++){
        let nuevaPalabra = `${fraseCortada[i][0].toUpperCase()}${fraseCortada[i].substring(1)}`
        /* Puedes usar el método .toUpperCase(), cuando necesite escribir cadenas en mayúsculas en sus proyectos de JavaScript. */
       /*  El metodo substring() básicamente obtiene una parte de la cadena original y la devuelve como una nueva cadena. */
        newArray.push(nuevaPalabra)
        /* El método push en JavaScript es una función que nos permite añadir un nuevo elemento al final de un array */
    }

    return newArray.join(" ")
    /* El método join concatena todos los elementos del vector en un único string. */
}

console.log(capitalizar(frases))