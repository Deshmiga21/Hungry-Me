
const restaurantForm = document.getElementById("restaurant-form");
const restaurantList = document.getElementById("restaurant-list");

restaurantForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const restaurantName = document.getElementById("restaurant-name").value;
    const cuisine = document.getElementById("restaurant-cuisine").value;
    addRestaurant(restaurantName, cuisine);
    restaurantForm.reset();
});

function addRestaurant(name, cuisine) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${name} (${cuisine}) 
    <button onclick="removeRestaurant(this)">Remove</button>`;
    restaurantList.appendChild(listItem);
}

function removeRestaurant(button) {
    const li = button.parentElement;
    li.remove();
}


const menuForm = document.getElementById("menu-form");
const menuList = document.getElementById("menu-list");

menuForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const itemName = document.getElementById("item-name").value;
    const price = document.getElementById("item-price").value;
    addMenuItem(itemName, price);
    menuForm.reset();
});

function addMenuItem(name, price) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${name} - Rs. ${price} 
    <button onclick="removeMenuItem(this)">Remove</button>`;
    menuList.appendChild(listItem);
}

function removeMenuItem(button) {
    const li = button.parentElement;
    li.remove();
}


const orderStatusForm = document.getElementById("order-status-form");
const orderStatusList = document.getElementById("order-status-list");

orderStatusForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const orderId = document.getElementById("order-id").value;
    const status = document.getElementById("order-status").value;
    updateOrderStatus(orderId, status);
    orderStatusForm.reset();
});

function updateOrderStatus(orderId, status) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Order #${orderId} - Status: ${status} 
    <button onclick="removeOrderStatus(this)">Remove</button>`;
    orderStatusList.appendChild(listItem);
}

function removeOrderStatus(button) {
    const li = button.parentElement;
    li.remove();
}
