funtion batalla (){
  let aleatorio = Math.round (Math.random () * (150-1) + parseInt (1)) ;;
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
  }
  function estado (imagen, ataque, defensa, velocidad, id) {
    buscar (`https://pokeapi.co/api/v2/pokemon/$ {id}`)
    .entonces (respuesta => respuesta.json ())
    .entonces (datos => {
      nombre.innerHTML = data.name;
      imagen.src = data.sprites.front_default;
      ataque.innerHTML = "Ataque:" + data.stats [1] .base_stat;
      defensa.innerHTML = "Defensa:" + data.stats [2] .base_stat;
     })
}
function fondo (contenedor, id) {

    buscar (`https://pokeapi.co/api/v2/pokemon/$ {id}`)
    .entonces (respuesta => respuesta.json ())
    .entonces (datos => {
        const {tipos} = datos;
        console.log (datos)
        setCardColor (tipos);
     })

    const setCardColor = types => {
        const colorOne = colores [tipos [0] .tipo.nombre];
        contenedor.style.backgroundColor = colorOne;
    }
}
