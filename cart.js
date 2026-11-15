
// Needs menu-data.js (menuItems, formatPrice, getUnitPrice, getSizeLabel) and
// cart-counter.js (CART_KEY, getCart, updateCartCounter) loaded first.

const WHATSAPP_NUMBER = "2347026456760";

const cartItemsContainer = document.querySelector("#cart-items");
const emptyCart = document.querySelector("#empty-cart");
const cartSummary = document.querySelector("#cart-summary");
const orderConfirm = document.querySelector("#order-confirm");

// Remembers that WhatsApp was opened, so the question is still there if the
// phone reloads this page when the customer comes back from WhatsApp.
const AWAITING_KEY = "nigerianKitchenAwaitingConfirm";

function setAwaitingConfirm(isAwaiting) {
    try {
        if (isAwaiting) sessionStorage.setItem(AWAITING_KEY, "1");
        else sessionStorage.removeItem(AWAITING_KEY);
    } catch {
        // sessionStorage unavailable: the box still works for this visit
    }

    orderConfirm.hidden = !isAwaiting;
}

function isAwaitingConfirm() {
    try {
        return sessionStorage.getItem(AWAITING_KEY) === "1";
    } catch {
        return false;
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCounter();
}

// Stops customer notes from being treated as HTML
function escapeHTML(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function getSize(item) {
    return item.size === "big" ? "big" : "regular";
}

// Unique id for one cart line. Items saved before notes existed have no
// lineId, so fall back to meal + size.
function lineKey(item) {
    return item.lineId || `${Number(item.id)}-${getSize(item)}`;
}

// Only items that exist on the menu and have a valid quantity
function getValidCart() {
    return getCart().filter(item =>
        menuItems.some(meal => meal.id === Number(item.id)) &&
        Number.isInteger(Number(item.quantity)) &&
        Number(item.quantity) > 0
    );
}

function displayCart() {
    const cart = getCart();
    const validCart = getValidCart();

    // Clean out any broken items saved in localStorage
    if (validCart.length !== cart.length) {
        saveCart(validCart);
    }

    if (validCart.length === 0) {
        cartItemsContainer.innerHTML = "";
        emptyCart.hidden = false;
        cartSummary.hidden = true;
        setAwaitingConfirm(false);
        return;
    }

    emptyCart.hidden = true;
    cartSummary.hidden = false;

    cartItemsContainer.innerHTML = validCart.map(item => {
        const meal = menuItems.find(
            product => product.id === Number(item.id)
        );

        const quantity = Number(item.quantity);
        const size = getSize(item);
        const unitPrice = getUnitPrice(meal, size);
        const sizeText = size === "big" ? " (Big takeaway)" : "";
        const key = escapeHTML(lineKey(item));

        const noteHTML = item.note
            ? `<p class="cart-item-note">Note: ${escapeHTML(item.note)}</p>`
            : "";

        return `
            <article class="cart-item">
                <img src="${meal.image}" alt="${escapeHTML(meal.name)}">

                <div class="cart-item-info">
                    <h3>${meal.name}${sizeText}</h3>
                    <p>${formatPrice(unitPrice)} each</p>
                    ${noteHTML}

                    <div class="cart-item-actions">
                        <button
                            class="quantity-button"
                            data-action="decrease"
                            data-line="${key}"
                            aria-label="Decrease quantity"
                        >−</button>

                        <span>${quantity}</span>

                        <button
                            class="quantity-button"
                            data-action="increase"
                            data-line="${key}"
                            aria-label="Increase quantity"
                        >+</button>

                        <button
                            class="remove-item"
                            data-action="remove"
                            data-line="${key}"
                        >Remove</button>
                    </div>
                </div>

                <div class="cart-item-total">
                    ${formatPrice(unitPrice * quantity)}
                </div>
            </article>
        `;
    }).join("");

    const total = validCart.reduce((sum, item) => {
        const meal = menuItems.find(
            product => product.id === Number(item.id)
        );

        return sum + getUnitPrice(meal, getSize(item)) * Number(item.quantity);
    }, 0);

    document.querySelector("#cart-subtotal").textContent = formatPrice(total);
    document.querySelector("#cart-total").textContent = formatPrice(total);
}

// Quantity buttons and remove
cartItemsContainer.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const line = button.dataset.line;
    const action = button.dataset.action;

    let cart = getCart();

    if (action === "remove") {
        cart = cart.filter(item => lineKey(item) !== line);
    } else {
        cart = cart.map(item => {
            if (lineKey(item) !== line) return item;

            const quantity = Number(item.quantity);

            return {
                ...item,
                quantity: action === "increase"
                    ? quantity + 1
                    : Math.max(1, quantity - 1)
            };
        });
    }

    saveCart(cart);
    displayCart();
});

// Checkout via WhatsApp
document.querySelector("#checkout-button").addEventListener("click", () => {
    const cart = getValidCart();

    if (cart.length === 0) return;

    let total = 0;

    let message = "Hello Nigerian Kitchen! I'd like to place an order:\n\n";

    cart.forEach(item => {
        const meal = menuItems.find(
            product => product.id === Number(item.id)
        );

        const quantity = Number(item.quantity);
        const size = getSize(item);
        const unitPrice = getUnitPrice(meal, size);
        const itemTotal = unitPrice * quantity;

        total += itemTotal;

        message += meal.name;
        if (size === "big") message += " (Big takeaway)";
        message += "\n";
        message += `Quantity: ${quantity}\n`;
        message += `Price: ${formatPrice(unitPrice)} each\n`;
        if (item.note) message += `Special request: ${item.note}\n`;
        message += `Subtotal: ${formatPrice(itemTotal)}\n\n`;
    });

    const notes = document.querySelector("#order-notes").value.trim();

    if (notes) {
        message += `Additional requests: ${notes}\n\n`;
    }

    message += `TOTAL: ${formatPrice(total)}\n\n`;
    message += "Please confirm my order. Thank you!";

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    // Ask before clearing: opening WhatsApp is not the same as sending
    setAwaitingConfirm(true);
});

// "Yes" clears the cart and notes, "No" keeps everything
document.querySelector("#confirm-sent").addEventListener("click", () => {
    saveCart([]);
    document.querySelector("#order-notes").value = "";
    setAwaitingConfirm(false);
    displayCart();
});

document.querySelector("#keep-cart").addEventListener("click", () => {
    setAwaitingConfirm(false);
});

// Redraw if the cart is changed in another tab
window.addEventListener("storage", event => {
    if (event.key === CART_KEY || event.key === null) displayCart();
});

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

displayCart();

// Came back from WhatsApp and the cart still has items? Ask again.
if (isAwaitingConfirm() && getValidCart().length > 0) {
    orderConfirm.hidden = false;
}
