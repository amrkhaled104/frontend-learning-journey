const products = [
    {
        id: Date.now(),
        title: "TOOLS 34 Low Profile Hydraulic Trolley",
        price: "$837",
        salePrice: "$586",
        color: "Black",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/automotive-11-300x300.jpg",
        onSale: true,
        popularity: 120,
        releaseDate: "2025-07-01"
    },
    {
        id: Date.now(),
        title: "Howard Chandelier Six Long Arms – Gunmetal",
        price: "$745",
        salePrice: null,
        color: "White",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/furniture-17-300x300.jpg",
        onSale: false,
        popularity: 90,
        releaseDate: "2025-06-15"
    },
    {
        id: Date.now(),
        title: "Wireless Noise-Canceling Headphones",
        price: "$199",
        salePrice: "$139",
        color: "Black",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-30-5-300x300.jpg",
        onSale: true,
        popularity: 250,
        releaseDate: "2025-05-10"
    },
    {
        id: Date.now(),
        title: "Mechanical Gaming Keyboard RGB",
        price: "$79",
        salePrice: null,
        color: "Gray",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-20-300x300.jpg",
        onSale: false,
        popularity: 180,
        releaseDate: "2025-04-22"
    },
    {
        id: Date.now(),
        title: "Smart Fitness Watch – Rose Gold",
        price: "$149",
        salePrice: "$119",
        color: "Rose Gold",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-1-300x300.jpg",
        onSale: true,
        popularity: 300,
        releaseDate: "2025-06-30"
    },
    {
        id: Date.now(),
        title: "Professional DSLR Camera Lens Kit",
        price: "$1029",
        salePrice: null,
        color: "Black",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: false,
        popularity: 340,
        releaseDate: "2025-07-05"
    },
    {
        id: Date.now(),
        title: "Smart Air Fryer XL – 6.8 Quart",
        price: "$165",
        salePrice: "$124",
        color: "Silver",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: true,
        popularity: 290,
        releaseDate: "2025-06-25"
    },
    {
        id: Date.now(),
        title: "Portable Bluetooth Speaker Waterproof",
        price: "$89",
        salePrice: "$71",
        color: "Blue",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-19-300x300.jpg",
        onSale: true,
        popularity: 320,
        releaseDate: "2025-07-10"
    },
    {
        id: Date.now(),
        title: "Cordless Drill Combo Kit 20V Max",
        price: "$225",
        salePrice: null,
        color: "Yellow",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/automotive-3-300x300.jpg",
        onSale: false,
        popularity: 190,
        releaseDate: "2025-07-03"
    },
    {
        id: Date.now(),
        title: "Modern Office Desk Lamp LED",
        price: "$58",
        salePrice: "$41",
        color: "White",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/furniture-11-300x300.jpg",
        onSale: true,
        popularity: 220,
        releaseDate: "2025-06-29"
    },
    {
        id: Date.now(),
        title: "Kitchen Mixer - 5 Speed",
        price: "$132",
        salePrice: "$99",
        color: "Red",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: true,
        popularity: 170,
        releaseDate: "2025-05-22"
    },
    {
        id: Date.now(),
        title: "Gaming Mouse - Programmable RGB",
        price: "$49",
        salePrice: "$36",
        color: "Black",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-7-300x300.jpg",
        onSale: true,
        popularity: 200,
        releaseDate: "2025-06-18"
    },
    {
        id: Date.now(),
        title: "Ergonomic Mesh Office Chair",
        price: "$265",
        salePrice: null,
        color: "Gray",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: false,
        popularity: 140,
        releaseDate: "2025-06-05"
    },
    {
        id: Date.now(),
        title: "Vintage Wall Clock – 24 inch",
        price: "$110",
        salePrice: null,
        color: "Brown",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: false,
        popularity: 105,
        releaseDate: "2025-05-25"
    },
    {
        id: Date.now(),
        title: "Double Hammock With Stand",
        price: "$150",
        salePrice: "$108",
        color: "Beige",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: true,
        popularity: 270,
        releaseDate: "2025-06-27"
    },
    {
        id: Date.now(),
        title: "Adjustable Dumbbell Set – 55LB",
        price: "$375",
        salePrice: null,
        color: "Black",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: false,
        popularity: 210,
        releaseDate: "2025-06-15"
    },
    {
        id: Date.now(),
        title: "Inflatable Pool – Family Size",
        price: "$95",
        salePrice: "$66",
        color: "Blue",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: true,
        popularity: 310,
        releaseDate: "2025-07-12"
    },
    {
        id: Date.now(),
        title: "Wooden Bookshelf – 5 Tier",
        price: "$180",
        salePrice: null,
        color: "Brown",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: false,
        popularity: 160,
        releaseDate: "2025-06-11"
    },
    {
        id: Date.now(),
        title: "Baby Stroller Compact Fold",
        price: "$299",
        salePrice: "$239",
        color: "Gray",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: true,
        popularity: 240,
        releaseDate: "2025-06-09"
    },
    {
        id: Date.now(),
        title: "Smart Light Strip - RGB 16M",
        price: "$39",
        salePrice: "$27",
        color: "Multicolor",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-10-300x300.jpg",
        onSale: true,
        popularity: 330,
        releaseDate: "2025-07-14"
    },
    {
        id: Date.now(),
        title: "Garden Tools Set - 10 Piece",
        price: "$55",
        salePrice: "$42",
        color: "Green",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: true,
        popularity: 200,
        releaseDate: "2025-06-01"
    },
    {
        id: Date.now(),
        title: "Hair Dryer 2200W - Ionic Tech",
        price: "$72",
        salePrice: "$54",
        color: "Pink",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: true,
        popularity: 195,
        releaseDate: "2025-05-19"
    },
    {
        id: Date.now(),
        title: "Men's Leather Wallet - RFID Blocking",
        price: "$65",
        salePrice: null,
        color: "Brown",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-3-300x300.jpg",
        onSale: false,
        popularity: 170,
        releaseDate: "2025-06-07"
    },
    {
        id: Date.now(),
        title: "LED Vanity Mirror - Touch Control",
        price: "$89",
        salePrice: "$62",
        color: "White",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-300x300.jpg",
        onSale: true,
        popularity: 260,
        releaseDate: "2025-07-09"
    },
    {
        id: Date.now(),
        title: "Adjustable Laptop Stand - Foldable",
        price: "$42",
        salePrice: "$29",
        color: "Silver",
        image: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-8-300x300.jpg",
        onSale: true,
        popularity: 350,
        releaseDate: "2025-07-02"
    }
];



let product_cards = document.querySelector("#product-cards");

const createMyOwnEle = function (parent, newElement, txt, src, classes) {
    let myEle = document.createElement(newElement);
    parent.appendChild(myEle);

    if (classes) myEle.className = classes;
    if (txt) myEle.textContent = txt;
    if (src) myEle.src = src;

    return myEle;
};



function draw(d, parent) {

const col = createMyOwnEle(parent, "div", null, null, "product-item card col-lg-3 col-6 position-relative");

    const card = createMyOwnEle(col, "div", null, null, "");

    createMyOwnEle(card, "img", null, d.image, "card-img-top");

    const body = createMyOwnEle(card, "div", null, null, "card-body");

    const title = createMyOwnEle(body, "p", d.title, null, "card-text lh-sm m-0");

    const priceDiv = createMyOwnEle(card, "div", null, null, "px-3 mb-2 d-flex align-items-center gap-2");

    if (d.salePrice) {
        createMyOwnEle(priceDiv, "span", d.salePrice, null, "text-danger fw-bold");
        createMyOwnEle(priceDiv, "span", d.price, null, "text-muted text-decoration-line-through ms-2");
    } else {
        createMyOwnEle(priceDiv, "span", d.price, null, "fw-semibold");
    }

    const buttons = createMyOwnEle(col, "div", null, null, "position-absolute top-0 end-0 m-2 d-flex flex-column gap-2 cardhover");

    const icons = [
        { class: "fa-regular fa-heart" },
        { class: "fa-solid fa-code-compare" },
        { class: "fa-solid fa-magnifying-glass" },
        { class: "fa-solid fa-cart-shopping" },
    ];

    icons.forEach(icon => {
        const btn = createMyOwnEle(buttons, "button", null, null, "btn btn-light p-1");
        createMyOwnEle(btn, "i", null, null, icon.class);
    });
}

products.forEach(product => draw(product, product_cards));

let saleCheckbox = document.querySelector("#saleCheckbox");

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const isDiscount = params.get("discount") === "true";

    if (isDiscount) {
        saleCheckbox.checked = true;

        product_cards.innerHTML = "";
        let filtered = products.filter(el => el.salePrice != null);
        filtered.forEach(product => draw(product, product_cards));
    } else {
        product_cards.innerHTML = "";
        products.forEach(product => draw(product, product_cards));
    }
});

saleCheckbox.addEventListener("change", () => {
    const url = new URL(window.location.href);

    if (saleCheckbox.checked) {
        url.searchParams.set("discount", "true");
    } else {
        url.searchParams.delete("discount");
    }

    window.history.replaceState({}, '', url);

    product_cards.innerHTML = "";

    let filtered = saleCheckbox.checked
        ? products.filter(el => el.salePrice != null)
        : products;

    filtered.forEach(product => draw(product, product_cards));
});
