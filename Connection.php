<?php
$host="localhost";
$username="admin_Root";
$password="RaduPaoloGaetano2004";
$db_nome="admin_Infoy_db";
$conn = new mysqli($host, $username, $password, $db_nome);
if ($conn->connect_errno) {
    exit("ERRORE: impossibile connetteri al server: $conn->connect_error");
}
?>