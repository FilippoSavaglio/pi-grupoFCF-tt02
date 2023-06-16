window.addEventListener("load", function(){

    let urlCanciones = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks`;
        
    fetch(urlCanciones)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        let datos = data.data;
        let sectionSongs = document.querySelector(".canciones");
        let songs='';
        console.log(data)

        for (let i=0; i<5; i++){
            songs += 
            `
            <article class="section-home">  
                    <a href="detalle-cancion.html?id=${datos[i].id}"><img src="${datos[i].album.cover_big}" alt=""></a>
                    <h5><a class="nombreDelArtista" href="detalle-artista.html?id=${datos[i].artist.id}">${datos[i].artist.name}</a></h5>
                    <h3><a href="detalle-cancion.html?id=${datos[i].id}">${datos[i].title}</a></h3>
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
        let sectionAlbums = document.querySelector(".albums");
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



    let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists`; 

    fetch(urlArtistas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        
        let datos = data.data;
        let sectionArtists = document.querySelector(".artistas");
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
    let formulario = document.querySelector("form");
    let campoBuscar = document.querySelector("[name = search]");
    let alert = document.querySelector(".alerta");
    let closeIcon = document.querySelector(".closeIcon");

    formulario.addEventListener("submit", function(e){
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

    campoBuscar.addEventListener("input", function(){
        alert.innerText = "";
        closeIcon.style.display = "none"
    })

    })

})

