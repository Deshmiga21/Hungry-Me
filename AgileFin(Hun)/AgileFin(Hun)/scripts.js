function searchRestaurants() {
    let query = document.getElementById('searchBar').value.trim();
    let feedback = document.getElementById('search-feedback');
    let restaurantList = document.getElementById('restaurant-list');
    let loading = document.getElementById('loading');
  
    if (!query) {
      feedback.innerText = "Please enter a search term.";
      return;
    }
  
    feedback.innerText = ""; 
    loading.style.display = 'block'; 
    restaurantList.innerHTML = '';

    fetch(`searchRestaurants.php?q=${query}`)
      .then(response => response.json())
      .then(data => {
        loading.style.display = 'none'; 
  
        if (data.length === 0) {
          restaurantList.innerHTML = '<p>No results found.</p>';
        } else {
          data.forEach(restaurant => {
            restaurantList.innerHTML += `
              <div class="restaurant-item">
                <h3>${restaurant.name}</h3>
                <p>Cuisine: ${restaurant.cuisine}</p>
                <p>Rating: ${restaurant.rating}</p>
              </div>
            `;
          });
        }
      })
      .catch(error => {
        loading.style.display = 'none';
        feedback.innerText = "Error fetching data. Please try again later.";
      });
  }
  