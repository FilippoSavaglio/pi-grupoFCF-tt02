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

    let nombreAlbum = document.querySelector('.nombre');
    nombreAlbum.innerText += `${data.title}`

    let imagenAlbum = document.querySelector('.foto-art');
    imagenAlbum.innerHTML += `<img with = "400px" class= "detalle" src="${data.cover}" alt="foto del album">`

    let ContArt = document.querySelector('.name');
    ContArt.innerHTML += `<a href="detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a>`

    let genero = document.querySelector('.genero');
    genero.innerHTML += `falta la pag de detalle de genero `

    let date = document.querySelector('.fecha');
    date.innerHTML += `${data.release_date}`

})
.catch(function (err) {
    console.log(err);
})

let urlDetalleCancion = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`

