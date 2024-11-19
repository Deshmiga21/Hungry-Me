<?php
session_start();
$cart = $_SESSION['cart'];
$total = 0;

foreach ($cart as $item) {
  $total += $item['price'];
}

echo "Total: $" . $total;
?>
<form method="POST" action="placeOrder.php">
  <input type="text" name="address" placeholder="Delivery Address" required>
  <button type="submit">Place Order</button>
</form>
