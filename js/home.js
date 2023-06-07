console.log("Bien vinculado el Home");

let urlHome = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks`;


fetch(urlHome)
.then(function(respuesta){
    return respuesta.json()
})
.then(function (data){
    
    let datos = data.data;
    let primeraSection = document.querySelector(".Canciones");
    let songs='';

    for (let i=0; i<5; i++){
        songs += 
        `
        <article>
        <img src="${datos[i].picture}" alt="" <a href="./detalle-cancion.html?canciones"></a>>
        <h3>${datos[i].title}</h3>
        <p>${datos[i].artist.name}</p>
        </article>
        ` 
    }
    primeraSection.innerHTML += songs;
})
.catch(function(error){
    console.log(error);
})


let urlAlbums = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums`;

fetch(urlAlbums)
.then(function(respuesta){
    return respuesta.json()
})
.then(function (data){
    
    let datos = data.data;
    let segundaSection = document.querySelector(".Albumes");
    let albm='';

    for (let i=0; i<5; i++){
        albm += 
        `
        <article>
        <img src="${datos[i].cover}" alt="" <a href="./detalle-album.html?albumes"></a>>
        <h3>${datos[i].title}</h3>
        </article>
        ` 
    }
    segundaSection.innerHTML += albm;
})
.catch(function(error){
    console.log(error);
})

let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists`;

fetch(urlArtistas)
.then(function(respuesta){
    return respuesta.json()
})
.then(function (data){
    
    let datos = data.data;
    let terceraSection = document.querySelector(".Artistas");
    let arti='';

    for (let i=0; i<5; i++){
        arti += 
        `
        <article>
        <img src="${datos[i].picture}" alt="" <a href="./detalle-artista.html?artista"></a>>
        <h3>${datos[i].name}</h3>
        </article>
        ` 
    }
    terceraSection.innerHTML += albm;
})
.catch(function(error){
    console.log(error);
})