const menuItems = [
    { id: 1, name: 'Chicken Biryani', cuisine: 'indian', price: 1500, description: 'Spicy Chicken Biryani.' },
    { id: 2, name: 'Pizza Margherita', cuisine: 'italian', price: 2000, description: 'Cheesy delight.' },
    { id: 3, name: 'Fried Rice', cuisine: 'chinese', price: 1200, description: 'Stir-fried rice with vegetables.' },
  ];
  
  function filterMenu() {
    const cuisine = document.getElementById('cuisine').value;
    const filteredItems = cuisine === 'all' ? menuItems : menuItems.filter(item => item.cuisine === cuisine);
    displayMenu(filteredItems);
  }
  
  function displayMenu(items) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';
    items.forEach(item => {
      menuList.innerHTML += `
        <div class="menu-item">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>Price: LKR ${item.price}</p>
          <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
        </div>
      `;
    });
  }
  
  function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
  
  window.onload = () => {
    displayMenu(menuItems);
  };
  