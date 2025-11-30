document.addEventListener("DOMContentLoaded", () => {
    const signupLink = document.getElementById("signupLink");
    const loginLink = document.getElementById("loginLink");
    const accountArea = document.getElementById("accountArea");

    if (localStorage.getItem("isSignedIn") === "true") {
        signupLink.style.display = "none";
        loginLink.style.display = "none";
        accountArea.classList.remove("d-none");
        accountArea.classList.add("d-flex");
    }

    document.getElementById("logoutBtn").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isSignedIn");
        window.location.reload();
    });
});

function toggleFavorite(icon) {
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
    icon.classList.toggle('active');
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

function addToCart(productName) {
    alert(productName + " added to cart!");
}

