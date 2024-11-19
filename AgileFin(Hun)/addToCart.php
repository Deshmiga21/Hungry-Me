<?php
session_start();
$item = json_decode(file_get_contents('php://input'), true);

if (!isset($_SESSION['cart'])) {
  $_SESSION['cart'] = array();
}

$_SESSION['cart'][] = $item;
echo json_encode($_SESSION['cart']);
?>
