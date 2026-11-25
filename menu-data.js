
const menuItems = [
    {
        id: 1,
        name: "Jollof Rice",
        category: "rice",
        description: "Flavour-packed Nigerian jollof rice.",
        price: 2000,
        image: "Jollof.jpg",
        bigTakeawayPrice: 3000,
        popular: true
    },
    {
        id: 2,
        name: "Bitter Leaf Soup",
        category: "soups",
        description: "Traditional bitter leaf soup, rich in flavour.",
        price: 2000,
        image: "bitterleaf.jpg",
        popular: true
    },
    {
        id: 3,
        name: "Catfish Pepper Soup",
        category: "soups",
        description: "Fresh catfish cooked in a spicy pepper broth.",
        price: 2500,
        image: "catfish.jpg",
        popular: true
    },
    {
        id: 4,
        name: "Shawarma (Chicken, No Sausage)",
        category: "shawarma",
        description: "A tasty and satisfying chicken shawarma.",
        price: 2000,
        image: "shawarma.jpg",
        popular: true
    },
    {
        id: 5,
        name: "Fried Rice",
        category: "rice",
        description: "Colourful Nigerian fried rice.",
        price: 2000,
        image: "Fried.jpg",
        bigTakeawayPrice: 3000
    },
    {
        id: 6,
        name: "Egusi Soup",
        category: "soups",
        description: "Rich and hearty egusi soup.",
        price: 2000,
        image: "Egusi.jpg"
    },
    {
        id: 7,
        name: "Okro Soup",
        category: "soups",
        description: "Smooth, comforting draw soup.",
        price: 2000,
        image: "okro.jpg"
    },
    {
        id: 8,
        name: "Vegetable Soup",
        category: "soups",
        description: "Leafy vegetable soup full of flavour.",
        price: 2000,
        image: "vegetable.jpg"
    },
    {
        id: 9,
        name: "Ogbono Soup",
        category: "soups",
        description: "Classic ogbono soup, thick and tasty.",
        price: 2000,
        image: "ogbono.jpg"
    },
    {
        id: 10,
        name: "Chicken (₦1,000)",
        category: "protein",
        description: "Well-seasoned grilled chicken.",
        price: 1000,
        image: "chicken.jpg"
    },
    {
        id: 11,
        name: "Chicken (₦1,500)",
        category: "protein",
        description: "Well-seasoned grilled chicken.",
        price: 1500,
        image: "chicken.jpg"
    },
    {
        id: 12,
        name: "Chicken (₦2,000)",
        category: "protein",
        description: "Well-seasoned grilled chicken.",
        price: 2000,
        image: "chicken.jpg"
    },
    {
        id: 13,
        name: "Chicken (₦2,500)",
        category: "protein",
        description: "Well-seasoned grilled chicken.",
        price: 2500,
        image: "chicken.jpg"
    },
    {
        id: 14,
        name: "Beef",
        category: "protein",
        description: "Tender, well-seasoned beef.",
        price: 1000,
        image: "beef.jpg"
    },
    {
        id: 15,
        name: "Plantain",
        category: "protein",
        description: "Golden fried plantain.",
        price: 500,
        image: "Plantain.jpg"
    },
    {
        id: 16,
        name: "Shawarma (1 Sausage with Chicken)",
        category: "shawarma",
        description: "Chicken shawarma with one sausage.",
        price: 3000,
        image: "shawarma.jpg"
    },
    {
        id: 17,
        name: "Shawarma (Double Sausage with Chicken)",
        category: "shawarma",
        description: "Chicken shawarma with double sausage.",
        price: 3900,
        image: "shawarma.jpg"
    },
    {
        id: 18,
        name: "Coke",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "coke.jpg"
    },
    {
        id: 19,
        name: "Malt",
        category: "drinks",
        description: "Served chilled.",
        price: 700,
        image: "amstel.jpg"
    },
    {
        id: 20,
        name: "Bullet",
        category: "drinks",
        description: "Served chilled.",
        price: 2000,
        image: "bullet.jpg"
    },
    {
        id: 21,
        name: "Despirado",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1300,
        image: "desperado.jpg"
    },
    {
        id: 22,
        name: "Hero",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1000,
        image: "herobear.jpg"
    },
    {
        id: 23,
        name: "Smirnoff Ice",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1300,
        image: "smirnoff.jpg"
    },
    {
        id: 24,
        name: "Trophy",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1000,
        image: "trophy.jpg"
    },
    {
        id: 25,
        name: "Guinness",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1400,
        image: "guiness.jpg"
    },
    {
        id: 26,
        name: "Legend",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1200,
        image: "legend.jpg"
    },
    {
        id: 27,
        name: "Life",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1000,
        image: "life.jpg"
    },
    {
        id: 28,
        name: "Predator",
        category: "drinks",
        description: "Served chilled.",
        price: 600,
        image: "predator.jpg"
    },
    {
        id: 29,
        name: "Infinite Power",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "infinite.jpg"
    },
    {
        id: 30,
        name: "Teem",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "team.jpg"
    },
    {
        id: 31,
        name: "Sprite",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "sprite.jpg"
    },
    {
        id: 32,
        name: "Fearless",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "Fearless.jpg"
    },
    {
        id: 33,
        name: "Vuji Baker",
        category: "drinks",
        alcoholic: true,
        description: "Served chilled.",
        price: 1000,
        image: "viju.jpg"
    },
    {
        id: 34,
        name: "Fanta",
        category: "drinks",
        description: "Served chilled.",
        price: 500,
        image: "fanta.jpg"
    },
    {
        id: 35,
        name: "Nutri Milk",
        category: "drinks",
        description: "Served chilled.",
        price: 700,
        image: "nutrimilk.jpg"
    },
    {
        id: 36,
        name: "5 Alive",
        category: "drinks",
        description: "Served chilled.",
        price: 1500,
        image: "alive.jpg"
    },
    {
        id: 37,
        name: "Bottle Water",
        category: "drinks",
        description: "Served chilled.",
        price: 250,
        image: "water.jpg"
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
