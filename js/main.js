let poke1, poke2;
let tip1, tip2;
let nomb1, nomb2;
let ataq1, ataq2;
let defen1, defen2;


function batalla(){
  let aleatorio1 = Math.round (Math.random () * (100-1) + parseInt (1)) ;;
  let aleatorio2 = Math.round (Math.random () * (100-2) + parseInt (1)) ;;
  poke1 = document.getElementById ("img1");
  poke2 = document.getElementById ("img2");
  nomb1 = document.getElementById ("nombre1");
  nomb2 = document.getElementById ("nombre2");

  traerDatos (poke1,nomb1,aleatorio1);
  traerDatos (poke2,nomb2,aleatorio2);

}
  
  function traerDatos (contenedor, nombre,id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then (response => response.json ())
    .then (data => {
      contenedor.src = data.sprites.other.dream_world.front_default; 
      nombre.innerHTML = data.name;
     })
}