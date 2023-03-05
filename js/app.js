//APP CARROUSEL
const carrousel = document.querySelector(".carrousel");
const slide = document.querySelector(".slide");
const flechaAnterior = document.querySelector("#flecha-anterior");
const flechaSiguiente = document.querySelector("#flecha-siguiente");

flechaSiguiente.addEventListener("click", ()=> {
    const slideWidth = slide.clientWidth;// Selecciono el ancho interno del slide en su contenedor
    carrousel.scrollLeft += slideWidth; // con scrollLeft obtengo los pixeles que se desplazara el contenido hacia la izquierda, lo comparo con el ancho y luego lo sumo +


});

flechaAnterior.addEventListener("click", ()=> {
    const slideWidth = slide.clientWidth;
    carrousel.scrollLeft -= slideWidth;//Aquí lo resto
});


const titulomov = document.querySelector(".hola");
const botonDer = document.querySelector("#botons");
const botonIzq = document.querySelector("#botonx");

