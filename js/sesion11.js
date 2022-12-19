const resultado = document.getElementById("pokedex")
const resultadoTabla = document.getElementById("pokedexTable")

let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]
 
/* 1. Ordernar los pokemons por base_damage de menor a mayor. */

const ordenarPorBaseDamage = pokemons.sort((a,b) => {return a.base_damage - b.base_damage});

//console.log(ordenarPorBaseDamage);


/* 2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed. */

function ordenarPorArgumento(argumento){
    if (typeof pokemons[0][argumento] === "string") {
      return pokemons.sort((a, b) => {return a[argumento].localeCompare(b[argumento]);});
    } else if (typeof pokemons[0][argumento] === "number") {
      return pokemons.sort((a, b) => {return a[argumento] - b[argumento];});
    } else {
      return "Utiliza un atributo valido";
    }
  };
 //console.log(ordenarPorArgumento("type"));


/* 3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon. */
function filtrarPorType(argumento){
    let pokemones = pokemons.filter((pokemon) => pokemon.type === argumento);
    //console.log(pokemones);
} 


/* 4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects. */

let pokemonMaster = {
    id: 1,
    name: "Reytor",
    created_date: "2022/12/16",
    pokemon: []
}

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

function agregarNuevoPokemon(){
const aleatorio = Math.floor(Math.random() * pokemons.length);
pokemonMaster.pokemon.push(pokemons[aleatorio]);
}
 
/* 6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
 */
function agregarAtributos(){
    pokemons.forEach((pokemon) => {
      pokemon.min_damage = Math.floor(Math.random() * 2) + 1;
      pokemon.max_damage = Math.floor(Math.random() * 3) + 3;
    });
  }

  agregarAtributos();
  console.log(pokemons);

/* 7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
daño = base_damage + un valor aleatorio entre el min_damage y el max_damage */

function determinarDaño(poke){
  return(poke.base_damage + Math.floor(Math.random() * (poke.max_damage - poke.min_damage + 1)) + poke.min_damage);  
}
//console.log(determinarDaño(pokemons[0]))


/* 8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente. */

function ordenarPorDaño(pokemon){
  pokemon.sort((a, b) => {return determinarDaño(b) - determinarDaño(a)});
}

agregarNuevoPokemon();
ordenarPorDaño(pokemonMaster.pokemon);
//console.log(pokemonMaster.pokemon);


/* 9. Crear una lista desordenada de Pokemons en nuestro documento HTML */

const lista = document.createElement("ul");
resultado.appendChild(lista);
pokemons.forEach((pokemon) => {
  const items = document.createElement("li");
  items.textContent = pokemon.name;
  lista.append(items);
});

 
/* 10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed */

const tabla = document.createElement("table");
tabla.classList.add("table");
tabla.setAttribute("border", "2");
resultadoTabla.appendChild(tabla);

const encabezados = document.createElement("thead")
const tr = document.createElement("tr")

for (const key in pokemons[0]){
    const th = document.createElement("th")
    th.textContent = capitalizarPalabra(key);
    th.style.cursor = "pointer";
    th.style.backgroundColor = "gold"
    th.addEventListener("click", (e) =>{
        ordenarPorArgumento(key)
        tabla.innerHTML = ""
        tabla.append(encabezados)
        construirCuerpo()
    })
    tr.append(th)
}

encabezados.append(tr);
tabla.append(encabezados);
construirCuerpo();

function construirCuerpo(){
    for (const index in pokemons){
        const tr = document.createElement("tr")
            for (const key in pokemons[index]){
                const td = document.createElement("td")
                td.textContent = pokemons[index][key]
                tr.append(td)
            }
        tabla.append(tr)
    }
}

  //Funcion para mostrar la primera letra en Mayuscula
function capitalizarPalabra(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}

/* 11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados. */
 
/* 12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name. */