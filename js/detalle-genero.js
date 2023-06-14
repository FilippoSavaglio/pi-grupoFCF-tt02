let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
idG = queryStringToObject.get(id)

let urlDetalleGenero = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`

fetch(urlDetalleGenero)
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data);
    let arrayI = data.data;

    let nombre = queryStringToObject.get('genre');

    nombreGene = document.querySelector(".genres-detail-titulo");
    nombreGene.innerText = `Lo mejor del ${nombre}`

    let sectionAlbum = document.querySelector('.generos')
    let contenidoSection = '';

    for(let i=0; i<arrayI.length; i++){
        contenidoSection += `
        <article class="dentro">
        <a href="detalle-artista.html?id=${arrayI[i].id}"><img src="${arrayI[i].picture_big}" alt="artista imagen"></a>
        <h4><a href="detalle-artista.html?id={arrayI[i].id}">${arrayI[i].name}</a></h4>
    </article>
        `
    }
    sectionAlbum.innerText += contenidoSection;

})
.catch(function(error){
    console.log(error);
})

