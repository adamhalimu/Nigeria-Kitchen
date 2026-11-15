// js/menu-data.js
// The ONLY place menuItems and formatPrice are declared.
// Load this before menu.js, product.js, cart.js and home.js.
//
// category: rice | soups | protein | shawarma | drinks
// bigTakeawayPrice: only meals with this field show the Big takeaway option
// alcoholic: true shows the 18+ badge and notice
// popular: true shows the meal in the "Popular" section on the homepage

const menuItems = [
    {
        id: 1,
        name: "Jollof Rice",
        category: "rice",
        description: "Flavour-packed Nigerian jollof rice.",
        price: 2000,
        image: "images/food.jpeg",
        bigTakeawayPrice: 3000,
        popular: true
    },
    {
        id: 2,
        name: "Bitter Leaf Soup",
        category: "soups",
        description: "Traditional bitter leaf soup, rich in flavour.",
        price: 2000,
        image: "images/food.jpeg",
        popular: true
    },
    {
        id: 3,
        name: "Catfish Pepper Soup",
        category: "soups",
        description: "Fresh catfish cooked in a spicy pepper broth.",
        price: 2500,
        image: "images/food.jpeg",
        popular: true
    },
    {
        id: 4,
        name: "Shawarma (Chicken, No Sausage)",
        category: "shawarma",
        description: "A tasty and satisfying chicken shawarma.",
        price: 2000,
        image: "images/food.jpeg",
        popular: true
    },
    {
        id: 5,
        name: "Fried Rice",
        category: "rice",
        description: "Colourful Nigerian fried rice.",
        price: 2000,
        image: "images/food.jpeg",
        bigTakeawayPrice: 3000
    },
    {
        id: 6,
        name: "Egusi Soup",
        category: "soups",
        description: "Rich and hearty egusi soup.",
        price: 2000,
        image: "images/food.jpeg"
    },
    {
        id: 7,
        name: "Draw Soup",
        category: "soups",
        description: "Smooth, comforting draw soup.",
        price: 2000,
        image: "images/food.jpeg"
    },
    {
        id: 8,
        name: "Vegetable Soup",
        category: "soups",
        description: "Leafy vegetable soup full of flavour.",
        price: 2000,
        image: "images/food.jpeg"
    },
    {
        id: 9,
        name: "Ogbono Soup",
        category: "soups",
        description: "Classic ogbono soup, thick and tasty.",
        price: 2000,
        image: "images/food.jpeg"
    },
    {
        id: 10,
        name: "Chicken (₦1,000)",
        category: "protein",
        description: "Well-seasoned grilled chicken.",
        price: 1000,
        image: "images/food.jpeg"
    },
    {
        id: 11,
        name: "Chicken (₦1,500)",
        category: "protein",
        description: "Well-seasoned grilled chicken.",
        price: 1500,
        image: "images/food.jpeg"
    },
    {
        id: 12,
        name: "Chicken (₦2,000)",
        category: "protein",
        description: "Well-seasoned grilled chicken.",
        price: 2000,
        image: "images/food.jpeg"
    },
    {
        id: 13,
        name: "Chicken (₦2,500)",
        category: "protein",
        description: "Well-seasoned grilled chicken.",
        price: 2500,
        image: "images/food.jpeg"
    },
    {
        id: 14,
        name: "Beef",
        category: "protein",
        description: "Tender, well-seasoned beef.",
        price: 1000,
        image: "images/food.jpeg"
    },
    {
        id: 15,
        name: "Plantain",
        category: "protein",
        description: "Golden fried plantain.",
        price: 500,
        image: "images/food.jpeg"
    },
    {
        id: 16,
        name: "Shawarma (1 Sausage with Chicken)",
        category: "shawarma",
        description: "Chicken shawarma with one sausage.",
        price: 3000,
        image: "images/food.jpeg"
    },
    {
        id: 17,
        name: "Shawarma (Double Sausage with Chicken)",
        category: "shawarma",
        description: "Chicken shawarma with double sausage.",
        price: 3900,
        image: "images/food.jpeg"
    },
    {
        id: 18,
        name: "Coke",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "images/food.jpeg"
    },
    {
        id: 19,
        name: "Malt",
        category: "drinks",
        description: "Served chilled.",
        price: 700,
        image: "images/drink-malt.jpg"
    },
    {
        id: 20,
        name: "Bullet",
        category: "drinks",
        description: "Served chilled.",
        price: 2000,
        image: "images/drink-bullet.jpg"
    },
    {
        id: 21,
        name: "Despirado",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1300,
        image: "images/drink-despirado.jpg"
    },
    {
        id: 22,
        name: "Hero",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1000,
        image: "images/drink-hero.jpg"
    },
    {
        id: 23,
        name: "Smirnoff Ice",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1300,
        image: "images/drink-smirnoff.jpg"
    },
    {
        id: 24,
        name: "Trophy",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1000,
        image: "images/drink-trophy.jpg"
    },
    {
        id: 25,
        name: "Guinness",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1400,
        image: "images/drink-guinness.jpg"
    },
    {
        id: 26,
        name: "Legend",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1200,
        image: "images/drink-legend.jpg"
    },
    {
        id: 27,
        name: "Life",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1000,
        image: "images/drink-life.jpg"
    },
    {
        id: 28,
        name: "Predator",
        category: "drinks",
        description: "Served chilled.",
        price: 600,
        image: "images/drink-predator.jpg"
    },
    {
        id: 29,
        name: "Infinite Power",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "images/drink-infinite-power.jpg"
    },
    {
        id: 30,
        name: "Teem",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "images/drink-teem.jpg"
    },
    {
        id: 31,
        name: "Sprite",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "images/drink-sprite.jpg"
    },
    {
        id: 32,
        name: "Fearless",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "images/drink-fearless.jpg"
    },
    {
        id: 33,
        name: "Vuji Baker",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1000,
        image: "images/drink-vuji-baker.jpg"
    },
    {
        id: 34,
        name: "Fanta",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "images/drink-fanta.jpg"
    },
    {
        id: 35,
        name: "Nutri Milk",
        category: "drinks",
        description: "Served chilled.",
        price: 700,
        image: "images/drink-nutri-milk.jpg"
    },
    {
        id: 36,
        name: "5 Alive",
        category: "drinks",
        description: "Served chilled.",
        price: 1500,
        image: "images/drink-5alive.jpg"
    },
    {
        id: 37,
        name: "Bottle Water",
        category: "drinks",
        description: "Served chilled.",
        price: 250,
        image: "images/food.jpeg"
    }
];

// size is "regular" (small takeaway) or "big". Anything else counts as regular.
function getUnitPrice(meal, size) {
    return size === "big" && meal.bigTakeawayPrice
        ? meal.bigTakeawayPrice
        : meal.price;
}

function getSizeLabel(size) {
    return size === "big" ? "Big takeaway" : "Small takeaway";
}

function formatPrice(price) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    }).format(price);
}
