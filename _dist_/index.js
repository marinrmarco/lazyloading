/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import {registerImage} from "./lazy.js"

//crear imagen
//agregar imagen en contenerod "imagen"
{/* <div class="p-4">
<img class="mx-auto" width="320" src="https://randomfox.ca/images/14.jpg" alt="">
</div> */}
const createImageNode = ()=>{
    //crear número aleatorio entre 1 y 120
    const random = () => Math.floor(Math.random() * (122 - 1)) + 1
    const url = "https://randomfox.ca/images/"

    const container = document.createElement('div')
    container.className = "p-4"

    const imagen = document.createElement('img')
    imagen.className = "mx-auto"
    imagen.width = "320"
    imagen.dataset.url_imagen = url + random() + ".jpg"

    container.appendChild(imagen)
    return container
}

const nuevaImagen = createImageNode()
const mountNode = document.getElementById('images')
const addButton = document.querySelector('button')

const addImage = () => {
    const newImage = createImageNode()    
    mountNode.append(newImage) 
    registerImage(newImage)
}
addButton.addEventListener('click', addImage)
