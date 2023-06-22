<?php
require_once "../Connection.php";

$mediaClass = $_POST["mediaClass"];
$score = $_COOKIE["score"];

$sql = "SELECT  AVG(`score`) FROM `user_table` ";
$result = $conn->query($sql);
$row = mysqli_fetch_array($result);
$mediaDB = (int)$row[0];


if ($mediaDB != $mediaClass) {
    echo $score;
    echo '/';
    echo $mediaDB;
} else {
    echo 'Non modificare';
}
