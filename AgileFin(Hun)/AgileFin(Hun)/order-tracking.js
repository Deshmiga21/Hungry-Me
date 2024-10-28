let orderStatus = 'Preparing';

function trackOrder() {
  const statusSpan = document.getElementById('status');
  setInterval(() => {
    if (orderStatus === 'Preparing') {
      orderStatus = 'Out for Delivery';
    } else if (orderStatus === 'Out for Delivery') {
      orderStatus = 'Delivered';
    }
    statusSpan.textContent = orderStatus;
  }, 5000);
}

window.onload = trackOrder;
