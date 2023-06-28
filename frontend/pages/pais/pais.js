import { getPaises, insertPaises, deletePaises } from "./API.js";

const paises = document.querySelector("#datosPaises");

addEventListener('DOMContentLoaded',()=>{
    cargarpaises();
});

async function cargarpaises(){
    const pais = await getPaises();
    pais.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.idPais}</td>
        <td>${element.nombrePais}</td>
        <td><button class="btn btn-danger delete" id="${element.idPais}">Eliminar</button></td>
    </tr>
    `;
    paises.innerHTML+=plantilla; 
    });
}

const formulario = document.getElementById("registro");
formulario.addEventListener('submit',nuevoPais);

function nuevoPais(e){
    e.preventDefault();
    const idPais  = document.querySelector("#id").value;
    const nombrePais = document.querySelector("#nombrePais").value;
    
    const registro={
        idPais ,
        nombrePais
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return insertPaises(registro);
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

const eliminar = document.querySelector("#datosPaises");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const idPais = e.target.getAttribute('id')
        console.log(idPais);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deletePaises(idPais);
        }
    }
}