let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
id = queryStringToObject.get('id');

let urlDetalleAlbum = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`;

fetch(urlDetalleAlbum)
.then (function (response) {
    return response.json();
})
.then (function (data){
    console.log(data);

    let nombreAlbum = document.querySelector('.titulo-detalles');
    nombreAlbum.innerText += `${data.title}`

    let imagenAlbum = document.querySelector('.img');
    imagenAlbum.innerHTML += `<img with = "400px" class= "detalle-foto" src="${data.cover_big}" alt="foto del album">`

    let ContArt = document.querySelector('.h4-artista');
    ContArt.innerHTML += `<a href="detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a>`

    let genero = document.querySelector('.h4_album');
    genero.innerHTML += `<a href="detalle-genero.html?id=${data.genre_id}">${data.genre.data[0].name}</a>`

    let date = document.querySelector('.h4-release');
    date.innerHTML += `${data.release_date}`

})
.catch(function (err) {
    console.log(err);
})

let urlDetalleCancion = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`

fetch(urlDetalleCancion)
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data);
    let arrayInfo = data.data;
    let tracklist = document.querySelector(".lista1");
    let contenidoLista ="";
    console.log(data);

    for (let i = 0; i < arrayInfo.length; i++){
        contenidoLista += `
              <li class="top">
                 <a href="detalle-cancion.html?id=${arrayInfo[i].id}"><i class="fafa"></i>${arrayInfo[i].title}</a>
              </li>
        `
    }
         tracklist.innerHTML += contenidoLista;

})
.catch(function(error){
    console.log(error);
})
 

let urlDetalleArtista = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`;

fetch(urlDetalleArtista)
.then(function(response){
    return response.json();
})

.then(function(data){

    let datos = data.data;
    let topAlbums = document.querySelector(".artistas");
    let contenedor = "";
    console.log(data)

    for(let i=0; i<5; i++){
        contenedor += `
        <article class="artista-home">
        <a href="detalle-album.html?id=${datos[i].id}"><img src="${datos[i].cover_big}" alt"album imagen"></a>
        <h4><a href="detalle-album.html?id=${datos[i].id}">${datos[i].title}</a></h4>
        <h4><a class="nombreArtista" href="detalle-artista.html?id=${datos[i].artist.id}">${datos[i].artist.name}</a></h4> 
        </article>    `


    }
    topAlbums.innerHTML += contenedor;
})

.catch(function(error){
    console.log(error);
})


