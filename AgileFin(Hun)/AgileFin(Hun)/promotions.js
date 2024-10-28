function applyCoupon(event) {
    event.preventDefault();
    const couponCode = document.getElementById('coupon').value;
    if (couponCode === 'DISCOUNT10') {
      alert('Coupon applied! You get a 10% discount.');
    } else {
      alert('Invalid coupon code.');
    }
  }
  