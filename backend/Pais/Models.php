<?php
    require_once("../Conectar.php");

    class Pais extends Conectar{

        public function get_pais(){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm=$conectar->prepare("SELECT * FROM pais");
                $stm->execute();
                return $stm->fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                $e -> getMessage();
            }
        }

        public function insert_pais($idPais, $nombrePais){
            try {
                $conectar=parent::Conexion();
                parent::set_name();
                $stm = "INSERT INTO pais(idPais, nombrePais) VALUES (?,?)";
                $stm = $conectar->prepare($stm);
                $stm -> bindValue(1,$idPais);
                $stm -> bindValue(2,$nombrePais);
                $stm -> execute();
                return $stm -> fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                $e -> getMessage();
            }
        }

        public function delete_pais($id){
                $conectar=parent::Conexion();
                parent::set_name();
                $sql = "DELETE FROM pais WHERE idPais=?";
                $sql = $conectar->prepare($sql);
                $sql -> bindValue(1,$id);
                $sql -> execute();
                return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>