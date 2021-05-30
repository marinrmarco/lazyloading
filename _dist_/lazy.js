const isIntersecting = (entry) => {
    return entry.isIntersecting
}
//Instanciar Intersection Observer
const observer = new IntersectionObserver((entries) => {
    //esto es lo que va a ejecutar el observer por cada elemento que observa
    entries.filter(isIntersecting).forEach(loadImage);
});

const loadImage = (entry) =>{
    const container = entry.target //imagen 
    const image = container.firstChild
    const url = image.dataset.url_imagen
    //asignar src a la imagen
    image.src = url
    // desregistra o deja de observar la imagen
    observer.unobserve(container)
}
//Crear funcion
export const registerImage = (imagen)=>{
    //Intersection Observer → observer(imagen)
    observer.observe(imagen)
}