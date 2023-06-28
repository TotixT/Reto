const urlCamper = "http://localhost/reto/backend/Camper/Controller.php?op=GetAll";
const urlNuevoCamper = "http://localhost/reto/backend/Camper/Controller.php?op=Insert";
const urlDeleteCamper = "http://localhost/reto/backend/Camper/Controller.php?op=Delete";
const urlCamperId = "http://localhost/reto/backend/Camper/Controller.php?op=GetId";
const urlUpdateCamper = "http://localhost/reto/backend/Camper/Controller.php?op=Update";

export const getCamper = async ()=>{
    try {
        const campers = await fetch(urlCamper);
        const datosCampers = campers.json();
        return datosCampers;
    } catch (error) {
        console.log(error);
    }
}

export const insertCamper = async (registrar)=>{
    try {
        await fetch(urlNuevoCamper,{
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

export const deleteCamper = async (id)=>{
    try {
        await fetch(`${urlDeleteCamper}&id=${id}`,{
            method:"DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}

export async function selectOneCamper(id) {
    try {
      const CamperId = await fetch(`${urlCamperId}&id=${id}`);
      const result = await CamperId.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

export async function updateCamper(data) {
    try {
      const CamperId = await fetch(urlUpdateCamper,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    } catch (error) {
      console.log(error);
    }
  }