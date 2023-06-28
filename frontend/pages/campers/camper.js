import { getCamper, insertCamper, deleteCamper } from "./API.js";

const camper = document.querySelector("#datosCamper");

addEventListener('DOMContentLoaded',()=>{
    cargarCampers();
});

async function cargarCampers(){
    const campers = await getCamper();
    campers.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.idCamper}</td>
        <td>${element.idReg}</td>
        <td>${element.nombreCamper}</td>
        <td>${element.apellidoCamper}</td>
        <td>${element.fechaNac}</td>
        <td><a class="btn btn-warning" href="editCamper.html?id=${element.idCamper}">Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.idCamper}">Eliminar</button></td>
    </tr>
    `;
    camper.innerHTML+=plantilla; 
    });
}

const formulario = document.getElementById("registro");
formulario.addEventListener('submit',nuevoCamper);

function nuevoCamper(e){
    e.preventDefault();
    const idCamper  = document.querySelector("#id").value;
    const idReg = document.querySelector("#idReg").value;
    const nombreCamper = document.querySelector("#nombreCamper").value;
    const apellidoCamper = document.querySelector("#apellidoCamper").value;
    const fechaNac = document.querySelector("#fechaNac").value;
    
    const registro={
        idCamper,
        idReg,
        nombreCamper,
        apellidoCamper,
        fechaNac
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return insertCamper(registro);
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

const eliminar = document.querySelector("#datosCamper");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const idCamper = e.target.getAttribute('id')
        console.log(idCamper);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteCamper(idCamper);
        }
    }
}