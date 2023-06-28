const urlRegion = "http://localhost/reto/backend/Region/Controller.php?op=GetAll";
const urlNuevoRegion = "http://localhost/reto/backend/Region/Controller.php?op=Insert";
const urlDeleteRegion = "http://localhost/reto/backend/Region/Controller.php?op=Delete";

export const getRegion = async ()=>{
    try {
        const regiones = await fetch(urlRegion);
        const datosRegiones = regiones.json();
        return datosRegiones;
    } catch (error) {
        console.log(error);
    }
}

export const insertRegion = async (registrar)=>{
    try {
        await fetch(urlNuevoRegion,{
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

export const deleteRegion = async (id)=>{
    try {
        await fetch(`${urlDeleteRegion}&id=${id}`,{
            method:"DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}