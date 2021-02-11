const menu = [
    {
        id: 1,
        title: "Chicken nugget",
        category: "starters",
        price: 19.99,
        img: "./images/starters/Chicken-nugget.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Chicken satay",
        category: "starters",
        price: 19.99,
        img: "./images/starters/Chicken-satay.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 3,
        title: "beef potato with vegetable",
        category: "dinner",
        price: 19.99,
        img: "./images/dinner/beef-potato-with-vegetable.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 4,
        title: "chinese styled noodles",
        category: "starters",
        price: 19.99,
        img: "./images/dinner/chinese-styled-noodles.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 5,
        title: "roasted beef",
        category: "dinner",
        price: 19.99,
        img: "./images/dinner/roasted-beef-with-sauce.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 6,
        title: "fried shrimp",
        category: "starters",
        price: 19.99,
        img: "./images/starters/fried-shrimp.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 7,
        title: "fried squid",
        category: "starters",
        price: 19.99,
        img: "./images/starters/fried-shrimp-and-squid.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 8,
        title: "japanese fried rice",
        category: "dinner",
        price: 19.99,
        img: "./images/dinner/japanese-fried-rice-with-corn.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 9,
        title: "smoked chicken",
        category: "dinner",
        price: 19.99,
        img: "./images/dinner/smoked-chicken.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 10,
        title: "sushi roll",
        category: "starters",
        price: 19.99,
        img: "./images/dinner/sushi-roll.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");


window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();
});


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return `<article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );

    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
                ${category}
            </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function(e) {
            
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem){
                
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}