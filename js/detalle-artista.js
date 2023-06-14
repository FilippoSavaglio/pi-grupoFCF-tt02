let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
id = queryStringToObject.get('id');


console.log("Bien vinculado el Detalle de un artista");

let urlDetalleArtista = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`;

fetch(urlDetalleArtista)
.then(function (response) {
    return response.json();
})

.then(function(data){
    let section = document.querySelector('.artistass');
    section.innerHTML += `<h1 class="she">${data.name}</h1>`;

    let imgg = document.querySelector('.img');
    imgg.innerHTML += `<img width="400px" class"detalle" src="${data.picture_big}" alt="artista">`

})
.catch(function (error) {
    console.log(error);
})

/* artistas relacionados */

let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists`; 

fetch(urlArtistas)
.then(function(response){
    return response.json();
})
.then(function(data){
    
    let datos = data.data;
    let sectionArtists = document.querySelector("#artistas");
    let artists ='';
    console.log(data)

    for (let i=0; i<5; i++){
        artists += 
        `
        <article class="artistas-home">    
            <a href="detalle-artista.html?id=${datos[i].id}"><img src="${datos[i].picture_big}" alt=""></a>
            <h4><a href="detalle-artista.html?id=${datos[i].id}">${datos[i].name}</a></h4>
        </article>
        ` 
    }
    sectionArtists.innerHTML += artists;
    })

.catch(function(error){
    console.log(error);
})