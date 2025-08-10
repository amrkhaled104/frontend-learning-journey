
$(document).ready(function () {
    // Initialize first carousel
    $(".owlS1").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 3
            },
            992: {
                items: 8
            }
        }
    });

    $(".carousel-two").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 15,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });
});

$(".carousel-three").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

/*backToTop */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.remove('d-none');
    } else {
        backToTopBtn.classList.add('d-none');
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
