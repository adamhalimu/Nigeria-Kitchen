// js/menu.js
// Needs menu-data.js loaded first (menuItems, formatPrice).

const menuGrid = document.querySelector("#menu-grid");
const searchInput = document.querySelector("#menu-search");
const filterButtons = document.querySelectorAll(".filter-button");
const noMealsMessage = document.querySelector("#no-meals");
const ageNotice = document.querySelector("#age-notice");

let activeCategory = "all";

function displayMeals(meals) {
    if (!menuGrid) return;

    menuGrid.innerHTML = meals.map(meal => `
        <article class="menu-card">

            <img
                src="${meal.image}"
                alt="${meal.name}"
                class="menu-card-image"
                loading="lazy"
            >

            <div class="menu-card-content">

                <h3>${meal.name}${meal.alcoholic ? ' <span class="age-badge">18+</span>' : ""}</h3>

                <p>${meal.description}</p>

                <div class="menu-card-bottom">

                    <span class="menu-card-price">
                        ${formatPrice(meal.price)}
                    </span>

                    <a
                        href="product.html?id=${meal.id}"
                        class="menu-order-button"
                    >
                        View Meal →
                    </a>

                </div>

            </div>

        </article>
    `).join("");

    if (ageNotice) {
        ageNotice.hidden = !meals.some(meal => meal.alcoholic);
    }

    if (noMealsMessage) {
        noMealsMessage.hidden = meals.length > 0;
    }
}

function filterMeals() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredMeals = menuItems.filter(meal => {
        const matchesCategory =
            activeCategory === "all" ||
            meal.category === activeCategory;

        const matchesSearch =
            meal.name.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    displayMeals(filteredMeals);
}

// Category filtering
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        activeCategory = button.dataset.category;
        filterMeals();
    });
});

// Search
if (searchInput) {
    searchInput.addEventListener("input", filterMeals);
}

// Initial display
displayMeals(menuItems);

// Footer year
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
