const menu = [
    {
        id: 1,
        title: "Chicken nugget",
        price: 19.99,
        img: "./images/starters/Chicken-nugget.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Salmon with vegetable salad",
        price: 19.99,
        img: "./images/starters/salmon-with-vegetable-salad.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 3,
        title: "beef potato with vegetable",
        price: 19.99,
        img: "./images/dinner/beef-potato-with-vegetable.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 4,
        title: "chinese styled noodles",
        price: 19.99,
        img: "./images/dinner/chinese-styled-noodles.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 5,
        title: "roasted beef",
        price: 19.99,
        img: "./images/dinner/roasted-beef-with-sauce.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 6,
        title: "fried shrimp",
        price: 19.99,
        img: "./images/starters/fried-shrimp.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <text>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </text>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});


// Reviews
const reviews = [
    {
        id: 1,
        name: "sara jones",
        text: "Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!",
    },
    {
        id: 2,
        name: "hush remy",
        text: "The food was fresh, properly prepared and a great value for the price. We highly recommend it. The breakfast buffet on Sunday was equally as good.",
    },
    {
        id: 3,
        name: "john doe",
        text: "The breakfast brunch was great. We went at 10:45 and everything was still hot and there was plenty of everything. Our server was very friendly and took good care of us.",
    },
    {
        id: 4,
        name: "mike den",
        text: "All the good reviews that I have read about this property are true. The friendliness of the staff seems genuine. I have never seen such good customer service as I experienced.",
    },
    {
        id: 5,
        name: "susan brit",
        text: "It was beautiful-peaceful and relaxing. Staff was outstanding. The restaurant was exceptional along with the hosts and servers.",
    },
    {
        id: 6,
        name: "mark davids",
        text: "We have had two meals here in two days.  Both were excellent.  Tonight “Q” was attentive and friendly.  Great job!",
    },
];

// Select items
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const auto = true;
const intervalTime = 5000;
let slideInterval;

// Set starting item
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    author.textContent = item.name;
    info.textContent = item.text;
});

// Show reviews based on item
function showPerson(person) {
    const item = reviews[person];
    author.textContent = item.name;
    info.textContent = item.text;
}

// Next Button
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Prev Button
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});


// Responsive
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

