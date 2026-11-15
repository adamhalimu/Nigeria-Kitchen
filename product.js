// js/product.js
// Needs menu-data.js (menuItems, formatPrice, getUnitPrice, getSizeLabel) and
// cart-counter.js (CART_KEY, getCart, updateCartCounter) loaded first.

const urlParams = new URLSearchParams(window.location.search);
const productId = Number(urlParams.get("id")) || 1;

const product = menuItems.find(meal => meal.id === productId);

if (!product) {
    document.querySelector(".product-layout").innerHTML = `
        <div class="product-not-found">
            <h2>Meal Not Found</h2>
            <a href="menu.html">Return to Menu</a>
        </div>
    `;
} else {
    document.title = `${product.name} | Nigerian Kitchen`;

    document.querySelector("#product-name").textContent = product.name;
    document.querySelector("#product-description").textContent =
        product.description;

    const priceElement = document.querySelector("#product-price");

    const productImage = document.querySelector("#product-image");
    productImage.src = product.image;
    productImage.alt = product.name;

    const quantityInput = document.querySelector("#product-quantity");
    const decreaseButton = document.querySelector("#decrease-quantity");
    const increaseButton = document.querySelector("#increase-quantity");
    const totalElement = document.querySelector("#product-total");
    const feedback = document.querySelector("#cart-feedback");
    const requestInput = document.querySelector("#product-request");

    // 18+ notice for alcoholic drinks
    if (product.alcoholic) {
        document.querySelector("#age-notice").hidden = false;
    }

    // Drinks and protein are not sold by the "plate"
    if (["drinks", "protein"].includes(product.category)) {
        document.querySelector('label[for="product-quantity"]').textContent =
            "Quantity";
    }

    // Big takeaway option (only for meals that have a bigTakeawayPrice)
    const sizeSection = document.querySelector("#product-size");
    const hasBigOption = Boolean(product.bigTakeawayPrice);

    if (hasBigOption) {
        sizeSection.hidden = false;

        document.querySelector("#regular-price").textContent =
            formatPrice(product.price);

        document.querySelector("#big-price").textContent =
            formatPrice(product.bigTakeawayPrice);

        document.querySelectorAll('input[name="portion"]').forEach(radio => {
            radio.addEventListener("change", updateTotal);
        });
    }

    function getSelectedSize() {
        if (!hasBigOption) return "regular";

        const selected = document.querySelector(
            'input[name="portion"]:checked'
        );

        return selected ? selected.value : "regular";
    }

    function updateTotal() {
        const quantity = Math.min(
            50,
            Math.max(1, Number(quantityInput.value) || 1)
        );

        const unitPrice = getUnitPrice(product, getSelectedSize());

        quantityInput.value = quantity;
        priceElement.textContent = formatPrice(unitPrice);
        totalElement.textContent = formatPrice(unitPrice * quantity);
    }

    decreaseButton.addEventListener("click", () => {
        quantityInput.value = Math.max(1, Number(quantityInput.value) - 1);
        updateTotal();
    });

    increaseButton.addEventListener("click", () => {
        quantityInput.value = Number(quantityInput.value) + 1;
        updateTotal();
    });

    quantityInput.addEventListener("change", updateTotal);

    document.querySelector("#add-to-cart").addEventListener("click", () => {
        const quantity = Math.min(
            50,
            Math.max(1, Number(quantityInput.value) || 1)
        );

        const size = getSelectedSize();
        const note = requestInput.value.trim().slice(0, 200);
        const cart = getCart();

        // Same meal, same size AND same note = same cart line.
        // A different note becomes its own line.
        const existingItem = cart.find(item =>
            Number(item.id) === product.id &&
            (item.size === "big" ? "big" : "regular") === size &&
            (item.note || "") === note
        );

        if (existingItem) {
            existingItem.quantity = Number(existingItem.quantity) + quantity;
        } else {
            cart.push({
                lineId: Date.now().toString(36) +
                    Math.random().toString(36).slice(2, 6),
                id: product.id,
                quantity: quantity,
                size: size,
                note: note
            });
        }

        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        updateCartCounter();

        const sizeText = hasBigOption ? ` (${getSizeLabel(size)})` : "";

        feedback.textContent =
            `${quantity} × ${product.name}${sizeText} added to your cart!`;

        quantityInput.value = 1;
        requestInput.value = "";
        updateTotal();
    });

    updateTotal();
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
