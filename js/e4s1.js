let users = [
    {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
    {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
    {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

function agregarDatosRevisar(user){
    let usuarios = [];
    let completar = "";

    for(let i=0; i<user.length; i++){
        for(const prop in user[i]){
            if(user[i][prop]===""){
                completar=prompt(`Ingresa ${prop}: `);
                user[i][prop] = completar;
                usuarios.push(`${prop}: `+`${completar}`);
            }
        }
    }
    return user;
}
console.log(agregarDatosRevisar(users))