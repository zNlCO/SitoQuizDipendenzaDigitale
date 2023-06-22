<?php
require_once "../Connection.php";

$writeName = $_POST['name'];
$lenClass = $_POST['lenClass'];

$sql = "SELECT `username` FROM `user_table` order by score desc";
$result = $conn->query($sql);
$i = 0;
while ($i < $lenClass) {
    $sqlName = mysqli_fetch_array($result);
    $i++;
}

if ($writeName != $sqlName[0]) {
    echo "YES";
}