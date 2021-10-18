let dejapokemon1, pokemon2;
let name1, name2;
let dejaataque1, ataque2;
let dejemosdefensa1, defesensa2;
funcion 
  let aleatorio1 = Math.round (Math.random () * (150-1) + parseInt (1)) ;;
  let aleatorio2 = Math.round (Math.random () * (150-2) + parseInt (1)) ;;
  p1 = document.getElementById ("img1");
  p2 = document.getElementById ("img2");
  nombre1 = document.getElementById ("nombre1");
  nombre2 = document.getElementById ("nombre2");
  tipo1 = document.getElementById ("tipo1");
  tipo2 = document.getElementById ("tipo2");
  ataque1 = document.getElementById ("ataque1");
  ataque2 = document.getElementById ("ataque2");
  defensa1 = document.getElementById ("defensa1");
  defensa2 = document.getElementById ("defensa2");
  traerDatos (p1, nombre1, tipo1, ataque1, defensa1, aleatorio1);
  traerDatos (p2, nombre2, tipo2, ataque2, defensa2, aleatorio2);
  fondo (aleatorio1);
  fondo (aleatorio2);
  
  function traerDatos (contenedor, nombre, tipo, ataque, defensa, id) {
    buscar (`https://pokeapi.co/api/v2/pokemon/ {id}`)
    .entonces (respuesta => respuesta.json ())
    .entonces (datos => {
      contenedor.src = data.sprites.front_default;
      nombre.innerHTML = data.name;
      tipo.innerHTML = "Tipo" + data.stats [1] .base_stat;
      ataque.innerHTML = "Ataque:" + data.stats [2] .base_stat;
      defensa.innerHTML = "Defensa:" + data.stats [3] .base_stat;
     })
}
  
window.onload = función 
    batalla ();
    