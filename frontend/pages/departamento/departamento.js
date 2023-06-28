import { getDepartamento, insertDepartamento, deleteDepartamento } from "./API.js";

const departamento = document.querySelector("#datosDepartamentos");

addEventListener('DOMContentLoaded',()=>{
    cargarDepartamentos();
});

async function cargarDepartamentos(){
    const department = await getDepartamento();
    department.forEach(element => {
        const plantilla = `
        <tr>
        <td>${element.idDep}</td>
        <td>${element.idPais}</td>
        <td>${element.nombreDep}</td>
        <td><button class="btn btn-danger delete" id="${element.idDep}">Eliminar</button></td>
    </tr>
    `;
    departamento.innerHTML+=plantilla; 
    });
}

const formulario = document.getElementById("registro");
formulario.addEventListener('submit',nuevoDepartamento);

function nuevoDepartamento(e){
    e.preventDefault();
    const idDep  = document.querySelector("#id").value;
    const idPais = document.querySelector("#idPais").value;
    const nombreDep = document.querySelector("#nombreDep").value;
    
    const registro={
        idDep,
        idPais,
        nombreDep
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return insertDepartamento(registro);
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

const eliminar = document.querySelector("#datosDepartamentos");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const idDep = e.target.getAttribute('id')
        console.log(idDep);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteDepartamento(idDep);
        }
    }
}