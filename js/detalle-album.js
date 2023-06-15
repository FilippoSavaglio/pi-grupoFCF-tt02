window.addEventListener("load", function(){

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
        imagenAlbum.innerHTML += `<img width = "400px" class= "detalle-foto" src="${data.cover_big}" alt="">`

        let ContArt = document.querySelector('.h4-artista');
        ContArt.innerHTML += `<a href="detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a>`

        let genero = document.querySelector('.h4_album');
        genero.innerHTML += `<a href="detalle-genero.html?id=${data.genre_id}">${data.genres.data[0].name}</a>`

        let date = document.querySelector('.h4-release');
        date.innerHTML += `${data.release_date}`

    })
    .catch(function (err) {
        console.log(err);
    })

    let urlTrackList = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}/tracks`

    fetch(urlTrackList)
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
                    <a href="detalle-cancion.html?id=${arrayInfo[i].id}"><i class="far fa-play-circle"></i>${arrayInfo[i].title}</a>
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
        let sectionAlbums = document.querySelector(".contenedor_artistas_home");
        let contenedor ='';
        console.log(data)

        for (let i=0; i<5; i++){
            contenedor += 
            `
            <article class="artistas-home">
                <a href="detalle-album.html?id=${datos[i].id}"><img src="${datos[i].cover_big}" alt=""></a>
                    <h4><a href="detalle-album.html?id=${datos[i].id}">${datos[i].title}</a></h4>
                    <h4><a class="nombreDelArtista" href="detalle-artista.html?id=${datos[i].artist.id}">${datos[i].artist.name}</a></h4>
            </article>
            ` 
        }

        sectionAlbums.innerHTML += contenedor;

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