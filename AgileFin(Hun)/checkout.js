function processOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;
  
    alert(`Order placed by ${name}. Delivery to: ${address}. Payment via: ${paymentMethod}`);
    localStorage.removeItem('cart');
    window.location.href = 'order-tracking.html';
  }
  