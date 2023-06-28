import { getRegion, insertRegion, deleteRegion } from "./API.js";

const region = document.querySelector("#datosRegion");

addEventListener('DOMContentLoaded',()=>{
    cargarRegion();
});

async function cargarRegion(){
    const regions = await getRegion();
    regions.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.idReg}</td>
        <td>${element.idDep}</td>
        <td>${element.nombreReg}</td>
        <td><button class="btn btn-danger delete" id="${element.idReg}">Eliminar</button></td>
    </tr>
    `;
    region.innerHTML+=plantilla; 
    });
}

const formulario = document.getElementById("registro");
formulario.addEventListener('submit',nuevaRegion);

function nuevaRegion(e){
    e.preventDefault();
    const idReg  = document.querySelector("#id").value;
    const idDep = document.querySelector("#idDep").value;
    const nombreReg = document.querySelector("#nombreReg").value;
    
    const registro={
        idReg,
        idDep,
        nombreReg
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return insertRegion(registro);
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

const eliminar = document.querySelector("#datosRegion");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const idDep = e.target.getAttribute('id')
        console.log(idDep);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteRegion(idDep);
        }
    }
}