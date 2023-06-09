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
    img.innerHTML += `<img src="${data.album.cover_big}" alt="">`;

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


let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks`;

fetch(urlArtistas)
.then(function(response){
    return response.json()
})
.then(function(data){

    console.log(data);
    let info = info.data;
    let canciones = document.querySelector("#detalles");
    let detalles = ""

    detalles += ` 
    <article class="la-info">    
        <img src="${info[i].album.cover}" alt=" " >
        <h4> Title: ${info[i].title}   </h4>
        <p> Compuesta por: ${info[i].artist.name}  </p>
        <p> Duracion: ${info[i].duration}  </p>
        <p> Parte del album: ${info[i].album.title}  </p>
        <p> Se encuentra en el top: ${info[i].position}  </p></article>
    `
    canciones.innerHTML = detalles;

})
.catch(function(error){
    console.log(error);
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