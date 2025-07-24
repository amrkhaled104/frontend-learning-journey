let searchSuggestions=document.querySelector("#searchSuggestions");
let form=document.querySelector("#form");

form.addEventListener("click",function(){
    searchSuggestions.classList.toggle("d-none");
})

  $(document).ready(function () {
            // Initialize first carousel
            $(".owlS1").owlCarousel({
                loop: true,
                margin: 20,
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
                        items: 1
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

const hoverLink = document.querySelector('.Fashionhover');
  const fashionBox = document.querySelector('.Fashion');

  hoverLink.addEventListener('mouseenter', () => {
    fashionBox.classList.remove('d-none');
  });

  hoverLink.addEventListener('mouseleave', () => {
    fashionBox.classList.add('d-none');
  });

  fashionBox.addEventListener('mouseleave', () => {
    fashionBox.classList.add('d-none');
  });