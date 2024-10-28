<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hungryme";
$cuisine = $_GET['cuisine'];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM restaurants";
if ($cuisine != 'all') {
  $sql .= " WHERE cuisine = '$cuisine'";
}

$result = $conn->query($sql);
$restaurants = array();

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $restaurants[] = $row;
  }
}

echo json_encode($restaurants);
$conn->close();
?>
