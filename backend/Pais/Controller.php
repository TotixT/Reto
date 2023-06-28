<?php
    header('Content-Type: application/json');

    require_once("../Conectar.php");
    require_once("Models.php");

    $Pais = new Pais();

    $body = json_decode(file_get_contents("php://input"),true);

    switch($_GET['op']){
        case "GetAll":
            $datos = $Pais->get_pais();
            echo json_encode($datos);
        break;

        case "Insert":
            $datos = $Pais->insert_pais($body['idPais'],$body['nombrePais']);
            echo json_encode("El Pais fue Insertado Correctamente");
        break;

        case "Delete":
            $datos = $Pais->delete_pais($_GET['id']);
            echo json_encode("El Pais fue Eliminado Correctamente");
        break;
    }

    
?>