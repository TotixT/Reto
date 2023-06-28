<?php
    require_once("../Conectar.php");

    class Camper extends Conectar{

        public function get_camper(){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm=$conectar->prepare("SELECT * FROM campers");
                $stm->execute();
                return $stm->fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                $e -> getMessage();
            }
        }

        public function insert_camper($idCamper, $idReg, $nombreCamper, $apellidoCamper, $fechaNac){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm = "INSERT INTO campers(idCamper, idReg, nombreCamper, apellidoCamper, fechaNac) VALUES (?,?,?,?,?)";
                $stm = $conectar->prepare($stm);
                $stm -> bindValue(1,$idCamper);
                $stm -> bindValue(2,$idReg);
                $stm -> bindValue(3,$nombreCamper);
                $stm -> bindValue(4,$apellidoCamper);
                $stm -> bindValue(5,$fechaNac);
                $stm -> execute();
                return $stm -> fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                $e -> getMessage();
            }
        }

        public function delete_camper($id){
                $conectar=parent::Conexion();
                parent::set_name();
                $sql = "DELETE FROM campers WHERE idCamper=?";
                $sql = $conectar->prepare($sql);
                $sql -> bindValue(1,$id);
                $sql -> execute();
                return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_camper_id($id){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm=$conectar->prepare("SELECT * FROM campers WHERE idCamper=?");
                $stm->bindValue(1,$id);
                $stm->execute();
                return $stm->fetchAll(PDO::FETCH_ASSOC);
            } catch (Exeption $e) {
                return $e->getMessage();
            }
        }

        public function update_camper($idCamper, $idReg, $nombreCamper, $apellidoCamper, $fechaNac){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm = $conectar->prepare("UPDATE campers SET idReg=?, nombreCamper=?, apellidoCamper=?, fechaNac=? WHERE idCamper=?");
                $stm -> bindValue(1,$idReg);
                $stm -> bindValue(2,$nombreCamper);
                $stm -> bindValue(3,$apellidoCamper);
                $stm -> bindValue(4,$fechaNac);
                $stm -> bindValue(5,$idCamper);
                $stm -> execute();
                return $stm -> fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                $e -> getMessage();
            }
        }
    }
?>