let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
id = queryStringToObject.get('id');
    
let urlGeneros = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre";

fetch(urlGeneros)
.then(function (response) {
    return response.json();
})
.then(function (data){

    let arrayInfo = data.data;
    let genres = document.querySelector(".generos");
    let contenido = "";
    console.log(data)

    for(let i=1; i<arrayInfo.length; i++){
        contenido += 
        `
        <article class = "genres">
            <a href= "detalle-genero.html?id=${arrayInfo[i].id}&genre=${arrayInfo[i].name}">
            <img class="genero-img" src="${arrayInfo[i].picture_big}" alt=""></a>
            <h4><a class="genero" href="detalle-genero.html?id=${arrayInfo[i].id}&genre=${arrayInfo[i].name}">${arrayInfo[i].name}</a></h4>
        </article>
        `
    }

    genres.innerHTML += contenido;

})
.catch(function (error) {
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