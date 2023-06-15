window.addEventListener('load', function(){

    let loader = document.querySelector('.gif');
    loader.style.display = 'none';
    
    let queryString = location.search;
    let queryStringObj = new URLSearchParams (queryString);
    let formulario = queryStringObj.get("search"); 

    let datoBuscado= document.querySelector(".result-titulo"); 
    datoBuscado.innerText = `Resultados para ${formulario}` 

    let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${formulario}`;

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        
        let leyenda = document.querySelector(".leyenda");
        if(data.data.length = 0){
            leyenda.style.display = "block";
        }

        let artistasData = data.data;
        let artistas = document.querySelector(".contenedor_artistas_home");
        let infoDeArtistas = "";
        console.log(data);

        for (let i = 0; i < artistasData.length; i++) {
            infoDeArtistas += 
            `
            <article class="artistas-home">    
                <a href="detalle-artista.html?id=${artistasData[i].id}"><img src="${artistasData[i].picture_big}" alt=""></a>
                <h4><a href="detalle-artista.html?id=${artistasData[i].id}">ARTISTA: ${artistasData[i].name}</a></h4>
            </article>
            <article class="artistas-home">  
                <a href="detalle-cancion.html?id=${artistasData[i].id}"><img src="${artistasData[i].album.cover_big}" alt=""></a><h4><a href="detalle-cancion.html?id=${artistasData[i].id}">CANCION: ${artistasData[i].title}</a></h4>
            </article>
            <article class="artistas-home">    
                <a href="detalle-album.html?id=${artistasData[i].album.id}"><img src="${artistasData[i].album.cover_big}" alt=""></a><h4><a href="detalle-album.html?id=${artistasData[i].album.id}">ALBUM: ${artistasData[i].album.title}</a></h4>
            </article>
            `
        }

        artistas.innerHTML += infoDeArtistas

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
