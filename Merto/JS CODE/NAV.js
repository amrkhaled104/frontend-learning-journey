let searchSuggestions = document.querySelector("#searchSuggestions");
let form = document.querySelector("#form");
form.addEventListener("click", function (e) {
    e.stopPropagation();
    searchSuggestions.classList.remove("d-none");
});

document.addEventListener("click", function (e) {
    if (!form.contains(e.target) && !searchSuggestions.contains(e.target)) {
        searchSuggestions.classList.add("d-none");
    }
});

const categoryLinks = document.querySelectorAll('.category-link');
const hoverBoxes = document.querySelectorAll('.hover-box');

if (window.innerWidth >= 992) { // فقط في الشاشات الكبيرة
    categoryLinks.forEach(link => {
        const targetId = link.dataset.target;
        const targetBox = document.getElementById(targetId);

        if (!targetBox) return;

        link.addEventListener('mouseenter', () => {
            hoverBoxes.forEach(box => box.classList.add('d-none'));
            targetBox.classList.remove('d-none');
        });

        link.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!targetBox.matches(':hover')) {
                    targetBox.classList.add('d-none');
                }
            }, 200);
        });

        targetBox.addEventListener('mouseleave', () => {
            targetBox.classList.add('d-none');
        });

        targetBox.addEventListener('mouseenter', () => {
            targetBox.classList.remove('d-none');
        });
    });
}

/*cate */
const dropdownSelectors = [
    {
        triggerId: "Categories-selector",
        menuId: "Categories-menu"
    },
    {
        triggerId: "Products-selector",
        menuId: "Products-menu"
    },
    {
        triggerId: "Homepage-selector",
        menuId: "Homepage-menu"
    },
    {
        triggerId: "Pages-selector",
        menuId: "Pages-menu"
    }
];

dropdownSelectors.forEach(({ triggerId, menuId }) => {
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);

    if (!trigger || !menu) return;

    trigger.addEventListener("mouseenter", () => {
        menu.classList.remove("d-none");
    });

    trigger.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!menu.matches(":hover")) {
                menu.classList.add("d-none");
            }
        }, 200);
    });

    menu.addEventListener("mouseenter", () => {
        menu.classList.remove("d-none");
    });

    menu.addEventListener("mouseleave", () => {
        menu.classList.add("d-none");
    });
});
/* for account */
const accountBtn = document.getElementById("accountBtn");
const loginPopup = document.getElementById("loginPopup");
const closeLoginPopup = document.getElementById("closeLoginPopup");

accountBtn.addEventListener("click", () => {
    loginPopup.classList.remove("d-none");
});

closeLoginPopup.addEventListener("click", () => {
    loginPopup.classList.add("d-none");
});

// Optional: Close popup on ESC key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        loginPopup.classList.add("d-none");
    }
});