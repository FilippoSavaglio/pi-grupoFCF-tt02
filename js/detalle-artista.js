window.addEventListener("load", function(){
    
    let queryString = location.search;
    let queryStringToObject = new URLSearchParams(queryString);
    id = queryStringToObject.get('id');

    let urlDetalleArtista = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`;

    fetch(urlDetalleArtista)
    .then(function (response) {
        return response.json();
    })

    .then(function(data){
        
        let section = document.querySelector('.artistas-titulo');
        section.innerHTML += `<h1 class="titulo-detalles">${data.name}</h1>`;

        let img = document.querySelector('.img');
        img.innerHTML += `<img width="400px" class="detalle-foto" src="${data.picture_big}" alt="">`

    })
    .catch(function (error) {
        console.log(error);
    })

    
    /* TOP ALBUMS */
    let urlTopAlbums = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/albums`;

    fetch(urlTopAlbums)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        let arrayInfo = data.data;
        let topAlbums = document.querySelector(".mejores-canciones")
        let contenidoLista = "";
        console.log(data)

        for (let i = 0; i < 5; i++) {
            contenidoLista +=
            `
            <li class="top">
                <a href="detalle-album.html?id=${arrayInfo[i].id}">
                <img width="100px" src="${arrayInfo[i].cover_medium}"alt=""> ${arrayInfo[i].title}</a>
            </li>
            `
        }

        topAlbums.innerHTML += contenidoLista;

    })

    
    /* ARTISTAS RELACIONADOS */

    let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/related`; 

    fetch(urlArtistas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        
        let datos = data.data;
        let sectionArtists = document.querySelector(".contenedor_artistas_home");
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


    /* VALIDANDO FORMULARIO DE BUSQUEDA */
    let formularioValid = document.querySelector("form");
    let campoBuscar = document.querySelector("[name = search]");
    let alert = document.querySelector(".alerta");
    let closeIcon = document.querySelector(".closeIcon");

    formularioValid.addEventListener("submit", function(e){
        
        e.preventDefault();

        if (campoBuscar.value == "") {
            alert.innerText = "El campo no puede estar vacio";
            closeIcon.style.display = "inline"
        } else if(campoBuscar.value.length < 3){
            alert.innerText = "Por favor ingrese mas de 3 caracteres";
            closeIcon.style.display = "inline"
        }else{
            this.submit();
        }   
    })

    campoBuscar.addEventListener("input", function(){
        alert.innerText = "";
        closeIcon.style.display = "none"
    })

})