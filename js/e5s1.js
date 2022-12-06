let users = [
    {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
    {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
    {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

console.log(users.sort((a,b) => {return a.edad - b.edad}))

/* sort, es un método muy potente, ya que mediante él podemos realizar todo tipo de órdenes,
clásicos como el alfabético, mayor a menor, menor a mayor, pero también cualquier orden
arbitrario sobre elementos de cualquier tipo. */