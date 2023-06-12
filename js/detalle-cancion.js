let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
id = queryStringToObject.get('id');

let urlDetalleCancion = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`

fetch(urlDetalleCancion)
.then(function(response) {
    return response.json()
})
.then(function(data) {
  
    let section = document.querySelector(".titulo-detalles");
    section.innerText += `${data.title}`;

    let img = document.querySelector(".img");
    img.innerHTML += `<img class="detalle-foto" src="${data.album.cover_big}" alt="">`;

    let artista = document.querySelector(".h4-artista");
    artista.innerHTML += `<a href="detail_artist.html?id=${data.artist.id}">${data.artist.name}</a>`

    let album = document.querySelector(".h4-album");
    album.innerHTML += `<a href="detail_album.html?id=${data.album.id}">${data.album.title}</a>`
    
    let escucha = document.querySelector(".h4-escucha");
    escucha.innerHTML += `${data.title}`

})
.catch(function(error) {
  console.log("Error: " + error);
})


/* CANCIONES POPULARES */
let urlCanciones = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks`;
    
fetch(urlCanciones)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    let datos = data.data;
    let sectionSongs = document.querySelector(".canciones");
    let songs='';
    console.log(data)

    for (let i=0; i<5; i++){
        songs += 
        `
        <article class="section-home">  
                <a href="detalle-cancion.html?id=${datos[i].id}"><img src="${datos[i].album.cover_big}" alt=""></a>
                <h5><a class="nombreDelArtista" href="detalle-artista.html?id=${datos[i].artist.id}">${datos[i].artist.name}</a></h5>
                <h3><a href="detalle-cancion.html?id=${datos[i].id}">${datos[i].title}</a></h3>
        </article>
        ` 
    }

        sectionSongs.innerHTML += songs;

})
.catch(function(error){
    console.log(error);
})



/*                      Guardar en favorito                         */

/* Crear un array vacio para luego ser completado con lo que trae localStorage --> */
let favoritos = [];

/* Recuperar localStorage de la key "favoritos" --> La key es el identificador */
let recuperoStorage = localStorage.getItem('favoritos');

/* Preguntar si es distinto de nulo para ver si tiene info --> el array puede estar vacio o no existir*/
if(recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage); /*Si recuperoStorage tiene algo,
                                             transofrmalo de JSON a algo manipulable, sino dejalo asi*/
}

/* Recurperar el elemento del DOM --> se recupero mediante un objeto literal llamado document
--> el query selector recibe un parametro (string) --> hace referencia al selector(id)*/
let fav = document.querySelector('#fav');

/* preguntar si el array favoritos incluye este ID 
--> si lo incluye cambiar el texto a quitar de favoritos*/

if(favoritos.includes(id)){
    fav.innerText = 'Sacar de Playlist'
}

/* agregar el evento click a el boton de Fav 
- preguntar si el array de favoritos inlcuye el ID del personaje

TRUE = si clickeo el btn y existe quiero eliminarlo y cambiar el texto del btn
FALSE = si clickeo el btn y NOO existe quiero pushearlo y cambiar el texto del btn

Pasar FAVORITOS a JSON y subirlos a localStorage */

fav.addEventListener('click',function(){
    if (favoritos.includes(id)) {
        let indice = favoritos.indexOf(id)
        favoritos.splice(indice,1);
        fav.innerText = "Agregar a playlist"
    } else {
        favoritos.push(id)
        fav.innerText = 'Sacar de Playlist'
    }
/* paso a subir la info al local Storage 
--> lo tengo q pasar de dato manipulable en js a string*/
let favoritosToString = JSON.stringify(favoritos);
localStorage.setItem('favoritos', favoritosToString) /*el primer parametro hace referencia a la clave = favoritos,
 el segundo a */
})


/* fetch(urlArtistas)
.then(function(response){
    return response.json();
})
.then(function(data){
    
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
    }

        canciones.innerHTML = detalles;

})
.catch(function(error){
    console.log(error);
}) */

/* let info = info.data;
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
})

    canciones.innerHTML = detalles;
 */