function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalItems = document.getElementById('total-items');
    const totalPrice = document.getElementById('total-price');
    
    let itemsHTML = '';
    let itemCount = 0;
    let priceTotal = 0;
    
    cart.forEach(item => {
      itemsHTML += `
        <div class="cart-item">
          <h3>${item.name}</h3>
          <p>Price: LKR ${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      `;
      itemCount += item.quantity;
      priceTotal += item.price * item.quantity;
    });
    
    cartItems.innerHTML = itemsHTML;
    totalItems.innerText = itemCount;
    totalPrice.innerText = priceTotal;
  }
  
  function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }
  
  function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
      alert('Proceeding to checkout');
      window.location.href = 'checkout.html';
    } else {
      alert('Your cart is empty');
    }
  }
  
  window.onload = loadCart;
  