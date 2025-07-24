$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 800,
  responsive: {
    0: { items: 2 },
    576: { items: 2 },
    992: { items: 3 },
    1200: { items: 5 }
  }
});

$('.tile')
  // tile mouse actions
  .on('mouseover', function () {
    $(this).children('.photo').css({ 'transform': 'scale(' + $(this).attr('data-scale') + ')' });
  })
  .on('mouseout', function () {
    $(this).children('.photo').css({ 'transform': 'scale(1)' });
  })
  .on('mousemove', function (e) {
    $(this).children('.photo').css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });
  })
  // tiles set up
  .each(function () {
    $(this)
      // add a photo container
      .append('<div class="photo"></div>')
      // some text just to show zoom level on current item in this example
      .append('<div class="txt"><div class="x">' + $(this).attr('data-scale') + 'x</div>ZOOM ON<br>HOVER</div>')
      // set up a background image for each tile based on data-image attribute
      .children('.photo').css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
  })

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