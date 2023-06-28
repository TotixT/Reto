<?php
    header('Content-Type: application/json');

    require_once("../Conectar.php");
    require_once("Models.php");

    $Departamento = new Departamento();

    $body = json_decode(file_get_contents("php://input"),true);

    switch($_GET['op']){
        case "GetAll":
            $datos = $Departamento->get_departamento();
            echo json_encode($datos);
        break;

        case "Insert":
            $datos = $Departamento->insert_departamento($body['idDep'],$body['idPais'],$body['nombreDep']);
            echo json_encode("El Departamento fue Insertado Correctamente");
        break;

        case "Delete":
            $datos = $Departamento->delete_departamento($_GET['id']);
            echo json_encode("El Departamento fue Eliminado Correctamente");
        break;
    }

    
?>