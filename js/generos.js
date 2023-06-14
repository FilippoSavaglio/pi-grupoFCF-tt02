let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
id = queryStringToObject.get('id');
    
let urlGeneros = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre`;

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
        contenido += `
        <article class = "dentro">

        <a href= "detalle-genero.html?id=${arrayInfo[i].id}&genre=${arrayInfo[i].name}"><img class="genero-img" src="${arrayInfo[i].picture_medium}" alt="genre imagen"></a>
        <h4><a class="genero" href="detail-genres.html?id=${arrayInfo[i].id}&genre=${arrayInfo[i].name}">${arrayInfo[i].name}</a></h4>
                    `
    }
    genres.innerHTML += contenido;

})

.catch(function (error) {
    console.log(error);
})
