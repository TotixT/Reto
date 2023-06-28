<?php
    require_once("../Conectar.php");

    class Departamento extends Conectar{

        public function get_departamento(){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm=$conectar->prepare("SELECT * FROM departamento");
                $stm->execute();
                return $stm->fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                $e -> getMessage();
            }
        }

        public function insert_departamento($idDep, $idPais, $nombreDep){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm = "INSERT INTO departamento(idDep, idPais, nombreDep) VALUES (?,?,?)";
                $stm = $conectar->prepare($stm);
                $stm -> bindValue(1,$idDep);
                $stm -> bindValue(2,$idPais);
                $stm -> bindValue(3,$nombreDep);
                $stm -> execute();
                return $stm -> fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                $e -> getMessage();
            }
        }

        public function delete_departamento($id){
                $conectar=parent::Conexion();
                parent::set_name();
                $sql = "DELETE FROM departamento WHERE idDep=?";
                $sql = $conectar->prepare($sql);
                $sql -> bindValue(1,$id);
                $sql -> execute();
                return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>