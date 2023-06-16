window.addEventListener("load", function(){
    
    let recuperoStorage = localStorage.getItem('favoritos');

    let favoritos = JSON.parse(recuperoStorage);

    let section = document.querySelector(".track_home_conteiner")

    if (favoritos == null || favoritos.length == 0) {
        section.innerHTML = "<p> No hay canciones en tu playlist</p>";
    } else {
        
        for (let i=0; i < favoritos.length; i++){
            
            let urlPlay = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}`

            fetch(urlPlay)
            .then(function(response){
                return response.json()
            })
            .then(function(data) {
                console.log(data);
                let cancionesFav = "";

                section.innerHTML += `
                <article class="track_home">
                    <a href="detalle-cancion.html?id=${data.id}"><img src="${data.album.cover_big}" width="200px" alt="Album Cover"></a><h3><a href="detalle-cancion.html?id=${data.id}">${data.title}</a></h3>
                    <h5 class="nombreDelArtista"><a href="detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a></h5>
                </article>
                `
            })
            .catch( function(error) {
                console.log(error);
            })
        }
    }
    
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