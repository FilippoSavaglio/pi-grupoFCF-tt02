let urlCanciones = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks`;
    
fetch(urlCanciones)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    let datos = data.data;
    let sectionSongs = document.querySelector("#canciones");
    let songs='';
    console.log(data)

    for (let i=0; i<5; i++){
        songs += 
        `
        <article class="item1">  
                <a href="detalle-cancion.html?id=${datos[i].id}"><img src="${datos[i].album.cover_big}" alt=""></a>
                <h5 class="margen"><a href="detalle-artista.html?id=${datos[i].artist.id}">${datos[i].artist.name}</a></h5>
                <h3 class="margen"><a href="detalle-cancion.html?id=${datos[i].id}">${datos[i].title}</a></h3>
        </article>
        ` 
    }

        sectionSongs.innerHTML += songs;

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
        <article class="album_track_home">
            <a href="detalle-album.html?id=${datos[i].id}"><img src="${datos[i].cover_big}" alt=""></a>
                <h5 class="margen"><a href="detalle-artista.html?id=${datos[i].artist.id}">${datos[i].artist.name}</a></h5>
                <h3 class="margen"><a href="detalle-album.html?id=${datos[i].id}">${datos[i].title}</a></h3>
        </article>
        ` 
    }

        sectionAlbums.innerHTML += albums;

})
.catch(function(error){
    console.log(error);
})



let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists`; 

fetch(urlArtistas)
.then(function(response){
    return response.json();
})
.then(function(data){
    
    let datos = data.data;
    let sectionArtists = document.querySelector(".Artistas");
    let artists ='';
    console.log(data)

    for (let i=0; i<5; i++){
        artists += 
        `
        <article class="item1">    
            <a href="detalle-artista.html?id=${datos[i].id}"><img src="${datos[i].picture_big}" alt=""></a>
            <h4 class="margen"><a href="detalle-artista.html?id=${datos[i].id}">${datos[i].name}</a></h4>
        </article>
        ` 
    }
    sectionArtists.innerHTML += artists;
    })

.catch(function(error){
    console.log(error);
})
