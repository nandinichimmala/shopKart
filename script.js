const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Update cart count on the home page
function updateHomeCartCount() {
    const cart = JSON.parse(localStorage.getItem("shopkartCart")) || [];
    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Search products
function searchFromHome() {
    if (!searchInput) return;

    const text = searchInput.value.trim();

    if (text !== "") {
        window.location.href =
            "products.html?search=" + encodeURIComponent(text);
    }
}

if (searchButton) {
    searchButton.addEventListener("click", searchFromHome);
}

if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchFromHome();
        }
    });
}

updateHomeCartCount();
window.addEventListener("pageshow", updateHomeCartCount);