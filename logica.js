let page = 1;
const btnnext = document.getElementById('btnSiguiente');
const btnlast = document.getElementById('btnAnterior');

btnnext.addEventListener('click', () => {
    if(page <= 1000){
    page += 1;
cargarPeliculas()}
})


    btnlast.addEventListener('click', () =>{
        if(page > 1){
        page -= 1;
        cargarPeliculas();}
    })


const cargarPeliculas =async ()=> {
try{
const respuestas = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=544a608b25c695a1e42fa2d1a7214fde&page=${page}`);
console.log(respuestas)
if (respuestas.status === 200){
const datos = await respuestas.json();

let pelicula = '';
let contenedor = document.getElementById('contenedor');
datos.results.forEach(peliculas => {
pelicula +=`
        <div class ="pelicula">
        <img class ="poster" src="https://image.tmdb.org/t/p/w500/${peliculas.poster_path}">
        </div>
       
        <h3 class = "titulo">${peliculas.title}</h3>`;
    
    });
contenedor.innerHTML = pelicula;

}else if(respuestas.status === 404){
console.log('elemento no encontrado');    
}else{
    console.log('hay un problema');
}
} catch(error){
    console.error(error);
}
}
cargarPeliculas()