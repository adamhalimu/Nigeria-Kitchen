// js/cart-counter.js
// The ONLY place CART_KEY and getCart() are declared.
// Load this on EVERY page, before the page's own script.

const CART_KEY = "nigerianKitchenCart";

function getCart() {
    try {
        const cart = JSON.parse(localStorage.getItem(CART_KEY));
        return Array.isArray(cart) ? cart : [];
    } catch {
        return [];
    }
}

function updateCartCounter() {
    const totalItems = getCart().reduce((total, item) => {
        return total + Math.max(0, Number(item.quantity) || 0);
    }, 0);

    document.querySelectorAll(".cart-count").forEach(counter => {
        counter.textContent = totalItems;
    });
}

// Page load
document.addEventListener("DOMContentLoaded", updateCartCounter);
updateCartCounter();

// Back/Forward button (page restored from cache)
window.addEventListener("pageshow", updateCartCounter);

// Another tab changed the cart
window.addEventListener("storage", event => {
    if (event.key === CART_KEY || event.key === null) updateCartCounter();
});
