console.log("Bien vinculado playlist");

let urlPlaylist = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}`;


/*                      Recuperar de favoritos    (PROXIMA CLASE)                   */

/* Recupero el storage */
let recuperoStorage = localStorage.getItem('favoritos');

/* transformar el json (string) en obj o un array */
let favoritos = JSON.parse(recuperoStorage)

/* Recuperar el elemento del DOM */
let section = document.querySelector("#lista");

/* Crear personajesFavoritos string vaci para luego ser completado con el fetch */
let cancionesfav = "";

/* Preguntar: Favoritos es null O su longitus es igual a 0
TRUE: dar un mensaje en la section diciendo que no hay datos en favoritos
FALSE: Hacer un FOR que recorra favoritos y haga un fetch por cada elemento del array de favoritos*/
if (favroitos == null || favoritos.length == 0) {
    section.innerHTML = "<p>No hay favoritos seleccionados</p>"
    
} else {
    
    for (let i=0; i < favroitos.length; i++){
        let urlPlay = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}`

        fetch(urlPlay)
        .then(function(data){
            return Response.JSON()
        })
        .then(function(data) {
            console.log(data);

            cancionesfav += `
            <article class="section-home">  
                    <a href="detalle-cancion.html?id=${data[i].id}"><img src="${data[i].album.cover_big}" alt=""></a>
                    <h5><a class="nombreDelArtista" href="detalle-artista.html?id=${data[i].artist.id}">${datos[i].artist.name}</a></h5>
                    <h3><a href="detalle-cancion.html?id=${data[i].id}">${data[i].title}</a></h3>
            </article>
            ` 
        section.innerHTML = cancionesfav;
        })
        .catch(function(error) {
            console.log(error);
        })
    }
}
    /* No hay favoritos */