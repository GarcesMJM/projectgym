dejapoke1, poke2;
dejatip1, tip2;
let nomb1, nomb2;
dejaataq1, ataq2;
let dejemosdefen1, defen2;
let funcionbatalla 
  let aleatorio1 = Math.round (Math.random () * (100-1) + parseInt (1)) ;;
  let aleatorio2 = Math.round (Math.random () * (100-2) + parseInt (1)) ;;
  poke1 = document.getElementById ("img1");
  poke2 = document.getElementById ("img2");
  nomb1 = document.getElementById ("nombre1");
  nomb2 = document.getElementById ("nombre2");
  tip1 = document.getElementById ("tipo1");
  tip2 = document.getElementById ("tipo2");
  ataq1 = document.getElementById ("ataque1");
  ataq2 = document.getElementById ("ataque2");
  defen1 = document.getElementById ("defensa1");
  defen2 = document.getElementById ("defensa2");
  traerDatos (poke1, nomb1, tip1, ataq1, defen1, aleatorio1);
  traerDatos (poke2, nomb2, tip2, ataq2, defen2, aleatorio2);
<<<<<<< HEAD
  }
=======
  fondo (aleatorio1);
  fondo (aleatorio2);
  
>>>>>>> 9549246e38e64854a3cf9a68276c80725f4873b2
  function traerDatos (contenedor, nombre, tipo, ataque, defensa, id) {
    buscar (`https://pokeapi.co/api/v2/pokemon/$ {id}`)
    .entonces (respuesta => respuesta.json ())
    .entonces (datos => {
      contenedor.src = data.sprites.front_default;
      nombre.innerHTML = data.name;
      tipo.innerHTML = "Tipo:" + data.stats [1] .base_stat;
      ataque.innerHTML = "Ataque:" + data.stats [2] .base_stat;
      defensa.innerHTML = "Defensa:" + data.stats [3] .base_stat;
     })
}