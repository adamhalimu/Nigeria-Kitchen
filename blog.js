const articles = [
    {
        title: "How to Prepare Delicious Nigerian Jollof Rice",
        category: "recipes",
        categoryName: "Nigerian Recipes",
        description: "Learn about the ingredients and cooking techniques used to prepare delicious Nigerian Jollof Rice.",
        image: "../images/food.jpeg",
        link: "jollof-rice-recipe.html",
        date: "Coming Soon"
    },
    {
        title: "How to Cook Traditional Bitterleaf Soup",
        category: "recipes",
        categoryName: "Nigerian Recipes",
        description: "Discover the ingredients and preparation process behind this popular Nigerian soup.",
        image: "../images/food.jpeg",
        link: "bitterleaf-soup-recipe.html",
        date: "Coming Soon"
    },
    {
        title: "A Beginner's Guide to Nigerian Cooking",
        category: "cooking-guides",
        categoryName: "Cooking Guides",
        description: "Explore essential cooking techniques and ingredients used in Nigerian cuisine.",
        image: "../images/food.jpeg",
        link: "nigerian-cooking-guide.html",
        date: "Coming Soon"
    },
    {
        title: "How to Prepare Catfish Pepper Soup",
        category: "recipes",
        categoryName: "Nigerian Recipes",
        description: "Learn how catfish pepper soup is prepared using traditional Nigerian flavours.",
        image: "../images/food.jpeg",
        link: "catfish-pepper-soup.html",
        date: "Coming Soon"
    },
    {
        title: "Understanding Popular Nigerian Soups",
        category: "food-knowledge",
        categoryName: "Food Knowledge",
        description: "Get familiar with some popular Nigerian soups and what makes each one special.",
        image: "../images/food.jpeg",
        link: "popular-nigerian-soups.html",
        date: "Coming Soon"
    },
    {
        title: "How to Make Homemade Nigerian Shawarma",
        category: "kitchen-tips",
        categoryName: "Kitchen Tips",
        description: "Explore the ingredients and preparation techniques behind Nigerian-style shawarma.",
        image: "../images/food.jpeg",
        link: "homemade-nigerian-shawarma.html",
        date: "Coming Soon"
    }
];

const blogGrid = document.querySelector("#blog-grid");
const searchInput = document.querySelector("#blog-search");
const filterButtons = document.querySelectorAll(".blog-filter");
const noArticles = document.querySelector("#no-articles");

let activeCategory = "all";


function displayArticles(articleList) {

    blogGrid.innerHTML = articleList.map(article => {

        return `
            <article class="blog-card">

                <div class="blog-card-image">
                    <img
                        src="${article.image}"
                        alt="${article.title}"
                        loading="lazy">
                </div>

                <div class="blog-card-content">

                    <span class="article-category">
                        ${article.categoryName}
                    </span>

                    <p class="blog-card-meta">
                        ${article.date}
                    </p>

                    <h3>${article.title}</h3>

                    <p>${article.description}</p>

                    <a href="${article.link}">
                        Read Article →
                    </a>

                </div>

            </article>
        `;

    }).join("");

    noArticles.hidden = articleList.length !== 0;
}


function filterArticles() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredArticles = articles.filter(article => {

        const matchesCategory =
            activeCategory === "all" ||
            article.category === activeCategory;

        const matchesSearch =
            article.title.toLowerCase().includes(searchTerm) ||
            article.description.toLowerCase().includes(searchTerm) ||
            article.categoryName.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;

    });

    displayArticles(filteredArticles);
}


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        activeCategory = button.dataset.category;

        filterArticles();

    });

});


searchInput.addEventListener("input", filterArticles);


// Initial display
displayArticles(articles);


// Footer year
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}