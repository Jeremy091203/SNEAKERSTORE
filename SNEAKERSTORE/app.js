const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      { code: "black", img: "img/Product/air.png" },
      { code: "darkblue", img: "img/Product/air2.png" },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      { code: "lightgray", img: "img/Product/jordan.png" },
      { code: "green", img: "img/Product/jordan2.png" },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      { code: "lightgray", img: "img/Product/blazer.png" },
      { code: "green", img: "img/Product/blazer2.png" },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      { code: "black", img: "img/Product/crater.png" },
      { code: "lightgray", img: "img/Product/crater2.png" },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      { code: "gray", img: "img/Product/hippie.png" },
      { code: "black", img: "img/Product/hippie2.png" },
    ],
  },
  {
    id: 6,
    title: "Court",
    price: 99,
    colors: [
      { code: "gray", img: "img/Product/court.jpg" },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
let currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Function to update color buttons and bind click events (FIXED)
function updateColorOptions() {
  currentProductColors = document.querySelectorAll(".color"); // Refresh reference

  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index]?.code || "#ccc";

    // Remove old event listeners by cloning
    const newColor = color.cloneNode(true);
    color.parentNode.replaceChild(newColor, color);

    // Fixed closure issue
    newColor.addEventListener("click", ((i) => {
      return () => {
        currentProductImg.src = choosenProduct.colors[i].img;
      };
    })(index));
  });
}

// Initialize product info and color click events
currentProductImg.src = choosenProduct.colors[0].img;
currentProductTitle.textContent = choosenProduct.title;
currentProductPrice.textContent = "RM" + choosenProduct.price;
updateColorOptions();

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Slide to new product
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Update product
    choosenProduct = products[index];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Re-bind color buttons
    updateColorOptions();
  });
});

// Size selection
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Payment popup
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Optional animation function (already defined in your code)
function changeProductImage(newSrc) {
  currentProductImg.classList.add("slide-out");

  setTimeout(() => {
    currentProductImg.src = newSrc;

    currentProductImg.classList.remove("slide-out");
    currentProductImg.classList.add("slide-in");

    setTimeout(() => {
      currentProductImg.classList.remove("slide-in");
    }, 500);
  }, 300);
}

