// js/home.js
// Needs menu-data.js loaded first (menuItems, formatPrice).

const popularFoodGrid = document.querySelector("#popular-food-grid");

if (popularFoodGrid) {
    popularFoodGrid.innerHTML = menuItems
        .filter(meal => meal.popular)
        .map(meal => `
        <article class="food-card">

            <img
                class="food-card-image"
                src="${meal.image}"
                alt="${meal.name}"
                loading="lazy"
            >

            <div class="food-card-content">

                <h3>${meal.name}</h3>

                <p class="food-card-description">
                    ${meal.description}
                </p>

                <div class="food-card-bottom">

                    <span class="food-price">
                        ${formatPrice(meal.price)}
                    </span>

                    <a
                        class="food-order-button"
                        href="product.html?id=${meal.id}"
                        aria-label="View ${meal.name}"
                    >
                        +
                    </a>

                </div>

            </div>

        </article>
    `).join("");
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
