<?php
    require_once("../Conectar.php");

    class Region extends Conectar{

        public function get_region(){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm=$conectar->prepare("SELECT * FROM region");
                $stm->execute();
                return $stm->fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                $e -> getMessage();
            }
        }

        public function insert_region($idReg, $idDep, $nombreReg){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm = "INSERT INTO region(idReg, idDep, nombreReg) VALUES (?,?,?)";
                $stm = $conectar->prepare($stm);
                $stm -> bindValue(1,$idReg);
                $stm -> bindValue(2,$idDep);
                $stm -> bindValue(3,$nombreReg);
                $stm -> execute();
                return $stm -> fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                $e -> getMessage();
            }
        }

        public function delete_region($id){
                $conectar=parent::Conexion();
                parent::set_name();
                $sql = "DELETE FROM region WHERE idReg=?";
                $sql = $conectar->prepare($sql);
                $sql -> bindValue(1,$id);
                $sql -> execute();
                return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>