<?php
    header('Content-Type: application/json');

    require_once("../Conectar.php");
    require_once("Models.php");

    $Region = new Region();

    $body = json_decode(file_get_contents("php://input"),true);

    switch($_GET['op']){
        case "GetAll":
            $datos = $Region->get_region();
            echo json_encode($datos);
        break;

        case "Insert":
            $datos = $Region->insert_region($body['idReg'],$body['idDep'],$body['nombreReg']);
            echo json_encode("La Region fue Insertada Correctamente");
        break;

        case "Delete":
            $datos = $Region->delete_region($_GET['id']);
            echo json_encode("La Region fue Eliminada Correctamente");
        break;
    }

    
?>