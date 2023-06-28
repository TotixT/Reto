const urlDepartamento = "http://localhost/reto/backend/Departamento/Controller.php?op=GetAll";
const urlNuevoDepartamento = "http://localhost/reto/backend/Departamento/Controller.php?op=Insert";
const urlDeleteDepartamento = "http://localhost/reto/backend/Departamento/Controller.php?op=Delete";

export const getDepartamento = async ()=>{
    try {
        const departamentos = await fetch(urlDepartamento);
        const datosDepartamentos = departamentos.json();
        return datosDepartamentos;
    } catch (error) {
        console.log(error);
    }
}

export const insertDepartamento = async (registrar)=>{
    try {
        await fetch(urlNuevoDepartamento,{
            method: "POST",
            body: JSON.stringify(registrar),
            headers:{
                'Content-Type':'application/json'
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteDepartamento = async (id)=>{
    try {
        await fetch(`${urlDeleteDepartamento}&id=${id}`,{
            method:"DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}