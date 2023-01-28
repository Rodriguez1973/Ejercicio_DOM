//Declaraciones.
let iconoEstrella=document.createTextNode('⭐'); //Ícono estrella.

//--------------------------------------------------------------------------------------------------
//Referencias de la interfaz.
const cajaPedidos = document.getElementById('cajaPedidos') //Contenedor 'cajaPedidos'.


function crearCajaArticulo(){
    let cajaArticulo = document.createElement('div') //Crea un contenedor para el artículo.
    cajaArticulo.className="cajaArticulo"
    //Botón añadir datos.
    let boton = document.createElement('button');
    boton.type = 'button'
    boton.innerText = 'V'
    cajaArticulo.appendChild(boton)
    //Botón borrar.
    boton = document.createElement('button');
    boton.type = 'button'
    boton.innerText = 'X'
    cajaArticulo.appendChild(boton)
    //Articulo.
    let nombreArticulo = document.createElement('p')
    nombreArticulo.innerText = "Camisetas azules. 2x1"
    cajaArticulo.appendChild(nombreArticulo)
    //Input cantidad.
    let inputNumber = document.createElement('input');
    inputNumber.type = 'number'
    inputNumber.setAttribute('min', 1)
    inputNumber.setAttribute('required', true)
    cajaArticulo.appendChild(inputNumber)
    //ÍconoEstrella.
    let estrella = document.createElement('p')
    estrella.appendChild(iconoEstrella)
    cajaArticulo.appendChild(estrella)
    //Input calificación.
    let inputRange = document.createElement('input');
    inputRange.className = 'calificacion'
    inputRange.id="prueba"
    inputRange.type = 'range'
    inputRange.step = "1"
    inputRange.value = "0"
    inputRange.min = '1'
    inputRange.max = '5'
    inputRange.setAttribute('list', 'tickmarks')
    inputRange.addEventListener('change', (evt)=>{
        evt.target.nextElementSibling.innerText=evt.target.value
    },false)
    cajaArticulo.appendChild(inputRange)
    //Elemento output.
    let output = document.createElement('output')
    cajaArticulo.appendChild(output)
    cajaPedidos.appendChild(cajaArticulo) //Se añade a cajaPedidos.
}

//--------------------------------------------------------------------------------------------------
//Ejecución.
crearCajaArticulo() //Creael primer Articulo.
let cajon = cajaPedidos.firstElementChild.cloneNode(true); //Clona la primera cajaArticulo.
cajon.childNodes[2].innerText="Vestido negro. Etiqueta"
cajaPedidos.appendChild(cajon)
cajon = cajaPedidos.firstElementChild.cloneNode(true); //Clona la primera cajaArticulo.
cajaPedidos.appendChild(cajon)