<?php
    class Conectar{
        protected $db;
        protected function Conexion(){
            try {
                $conectar = $this->db = new PDO("mysql:local=localhost;dbname=campusland","root","");
                return $conectar;
            } catch (Exception $e) {
                $e->getMessage();
            }
        }

        public function set_name(){
            return $this->db->query("SET NAMES 'utf8'");
        }
    }
?>