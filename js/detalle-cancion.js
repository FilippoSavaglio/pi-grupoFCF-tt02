console.log("Bien vinculado el Detalle de una cancion");

let urlDetalleCancion = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`

fetch(urlDetalleCancion)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let info = info.data;
  let canciones = document.querySelector("#detalles");
  let detalles = ""

  detalles += ` <article class="la-info"> 
              <img src="${info[i].album.cover}" alt=" " >
              <h4> Title: ${info[i].title}   </h4>
              <p> Compuesta por: ${info[i].artist.name}  </p>
              <p> Duracion: ${info[i].duration}  </p>
              <p> Parte del album: ${info[i].album.title}  </p>
              <p> Se encuentra en el top: ${info[i].position}  </p>
               </article>
              `
              canciones.innerHTML = detalles;

})
.catch(function(error) {
  console.log("Error: " + error);
})

