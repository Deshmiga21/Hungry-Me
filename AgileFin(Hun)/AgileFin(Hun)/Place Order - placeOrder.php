<?php
session_start();
$address = $_POST['address'];
$cart = $_SESSION['cart'];


$conn = new mysqli("localhost", "root", "", "hungryme");
$sql = "INSERT INTO orders (address, total) VALUES ('$address', 0)";

if ($conn->query($sql) === TRUE) {
  $orderId = $conn->insert_id;
  foreach ($cart as $item) {
    $conn->query("INSERT INTO order_items (order_id, item_name, price) VALUES ($orderId, '{$item['name']}', {$item['price']})");
  }
  echo "Order placed!";
  unset($_SESSION['cart']); 
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
?>
