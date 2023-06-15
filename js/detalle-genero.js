window.addEventListener("load", function(){

    let queryString = location.search;
    let queryStringToObject = new URLSearchParams(queryString);
    id = queryStringToObject.get('id');

    let urlDetalleGenero = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`

    fetch(urlDetalleGenero)
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data);

        let arrayInfo = data.data;
        let nombre = queryStringToObject.get('genre');

        nombreGene = document.querySelector(".genres-detail-titulo");
        nombreGene.innerText = `Lo mejor del ${nombre}`

        let sectionAlbum = document.querySelector('.contenedor_artistas_home')
        let contenidoSection = '';

        for(let i=0; i<arrayInfo.length; i++){
            contenidoSection += 
            `
            <article class="artistas-home">
            <a href="detalle-artista.html?id=${arrayInfo[i].id}"><img src="${arrayInfo[i].picture_big}" alt=""></a>
            <h4><a href="detalle-artista.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h4>
        </article>
            `
        }
        sectionAlbum.innerHTML += contenidoSection;

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