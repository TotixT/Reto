<?php
    header('Content-Type: application/json');

    require_once("../Conectar.php");
    require_once("Models.php");

    $Camper = new Camper();

    $body = json_decode(file_get_contents("php://input"),true);

    switch($_GET['op']){
        case "GetAll":
            $datos = $Camper->get_camper();
            echo json_encode($datos);
        break;

        case "Insert":
            $datos = $Camper->insert_camper($body['idCamper'],$body['idReg'],$body['nombreCamper'],$body['apellidoCamper'],$body['fechaNac']);
            echo json_encode("El Camper fue Insertado Correctamente");
        break;

        case "Delete":
            $datos = $Camper->delete_camper($_GET['id']);
            echo json_encode("El Camper fue Eliminado Correctamente");
        break;

        case "GetId":
            $datos = $Camper->get_camper_id($_GET['id']);
            echo json_encode($datos);
        break;

        case "Update":
            $datos = $Camper->update_camper($body['idCamper'],$body['idReg'],$body['nombreCamper'],$body['apellidoCamper'],$body['fechaNac']);
            echo json_encode("El Camper fue Actualizado Correctamente");
        break;
    }

    
?>