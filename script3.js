let cartCount = 0;

// Function to scroll to specific category section
function scrollToCategory(categoryId) {
    const element = document.getElementById(categoryId);
    window.scrollTo({
        top: element.offsetTop - 80, // Adjusting for the fixed header height
        behavior: 'smooth'
    });
}

// Function to add item to cart and update cart count
function addToCart() {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
}
