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

let urlDetalleCancion = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks`

fetch(urlDetalleCancion)
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data);
    let arrayInfo = data.data;
    let tracklist = document.querySelector(".lista1");
    let contenidoLista ='';
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
 

let urlAlbums = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums`;

fetch(urlAlbums)
.then(function(response){
    return response.json()
})
.then(function (data){
    
    let datos = data.data;
    let sectionAlbums = document.querySelector("#albums");
    let albums ='';
    console.log(data)

    for (let i=0; i<5; i++){
        albums += 
        `
        <article class="section-home">
            <a href="detalle-album.html?id=${datos[i].id}"><img src="${datos[i].cover_big}" alt=""></a>
                <h5><a class="nombreDelArtista" href="detalle-artista.html?id=${datos[i].artist.id}">${datos[i].artist.name}</a></h5>
                <h3><a href="detalle-album.html?id=${datos[i].id}">${datos[i].title}</a></h3>
        </article>
        ` 
    }

        sectionAlbums.innerHTML += albums;

})
.catch(function(error){
    console.log(error);
})


