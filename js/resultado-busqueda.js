let queryString = location.search;
let queryStringObj = new URLSearchParams(querystring);
let formulario = queryStringObj.get("search");

let datoBuscado = document.querySelector(".result-titulo")

let urlBuscador = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${formulario}`

fetch(urlBuscador)
.then(function(result){
    return response.json();
})
.then(function(data){

console.log(data);



})