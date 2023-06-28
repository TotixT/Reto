import { selectOneCamper, updateCamper } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
  datosCamper();
  editCamper();
});

const edit_idReg = document.querySelector("#editidReg");
const edit_nombreCamper = document.querySelector("#editNombreCamper");
const edit_apellidoCamper = document.querySelector("#editApellidoCamper");
const edit_Fecha = document.querySelector("#editFecha");
const formularioEdit = document.querySelector("#formularioEditar");

async function datosCamper() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const datos = await selectOneCamper(id);
    console.log(datos[0]);
    edit_idReg.value = datos[0].idReg;
    edit_nombreCamper.value = datos[0].nombreCamper;
    edit_apellidoCamper.value = datos[0].apellidoCamper;
    edit_Fecha.value = datos[0].fechaNac;
  } catch (error) {
    console.log(error);
  }
}

async function editCamper() {
  try {
    formularioEdit.addEventListener("submit", (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      const dataJson = {
        idCamper: id,
        idReg: edit_idReg.value,
        nombreCamper: edit_nombreCamper.value,
        apellidoCamper: edit_apellidoCamper.value,
        fechaNac: edit_Fecha.value
      };
      console.log(dataJson);
      updateCamper(dataJson);
      alert("Datos actualizados correctamente.");
      window.location = "campers.html";
    });
  } catch (error) {
    console.log(error);
  }
}