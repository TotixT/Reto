const urlPaises = "http://localhost/reto/backend/Pais/Controller.php?op=GetAll";
const urlNuevoPaises = "http://localhost/reto/backend/Pais/Controller.php?op=Insert";
const urlDeletePaises = "http://localhost/reto/backend/Pais/Controller.php?op=Delete";

export const getPaises = async ()=>{
    try {
        const paises = await fetch(urlPaises);
        const datosPaises = paises.json();
        return datosPaises;
    } catch (error) {
        console.log(error);
    }
}

export const insertPaises = async (registrar)=>{
    try {
        await fetch(urlNuevoPaises,{
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

export const deletePaises = async (id)=>{
    try {
        await fetch(`${urlDeletePaises}&id=${id}`,{
            method:"DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}