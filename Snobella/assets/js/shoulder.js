function addToCart(productName) {
    alert(productName + " added to cart!");
  }

  function rateStar(clickedStar, rating) {
    const stars = clickedStar.parentElement.querySelectorAll('i');
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('fa-solid', 'active');
        star.classList.remove('fa-regular');
      } else {
        star.classList.remove('fa-solid', 'active');
        star.classList.add('fa-regular');
      }
    });
  }

  document.getElementById('sortSelect').addEventListener('change', function () {
    const sortBy = this.value;
    alert("Sorting by: " + sortBy);
    // Buraya gerçek sıralama mantığı entegre edilebilir
  });