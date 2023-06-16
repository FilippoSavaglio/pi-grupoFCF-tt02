let queryString = location.search 
let queryStringToObject = new URLSearchParams(queryString); 
let id = queryStringToObject.get('id');

window.addEventListener("load", function(){
    
    let urlDetalleCancion = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`;

    fetch(urlDetalleCancion)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
    
        let section = document.querySelector(".titulo-detalles");
        section.innerText += `${data.title}`;

        let img = document.querySelector(".img");
        img.innerHTML += `<img width="400px" class="section-home" src="${data.album.cover_big}" alt="">`;

        let artista = document.querySelector(".h4-artista");
        artista.innerHTML += `<a href="detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a>`

        let album = document.querySelector(".h4-album");
        album.innerHTML += `<a href="detalle-album.html?id=${data.album.id}">${data.album.title}</a>`

        
        
        let escucha = document.querySelector(".h4-escucha");
        escucha.innerHTML += `${data.title}`

    })
    .catch(function(error) {
    console.log("Error: " + error);
    })


    /* CANCIONES POPULARES */
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

})

let favoritos = [];

let recuperoStorage = localStorage.getItem('favoritos');

if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage);
}

let fav = document.querySelector(".ruta-detalle")

if(favoritos.includes(id)){
    document.querySelector('.ruta-detalle').innerText = `Quitar de mí playlist`;
}

fav.addEventListener("click", function(){
   
    if (favoritos.includes(id)) {
        let idASacar = favoritos.indexOf(id);
        favoritos.splice(idASacar, 1);
        fav.innerHTML = `<i class="far fa-heart"></i> Añadir a mi playlist`;

    } else {
        favoritos.push(id);
        document.querySelector(".ruta-detalle").innerHTML = `<i class="fas fa-heart"></i> Quitar de mí playlist`;
    }

    let favParaStorage = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favParaStorage);
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
