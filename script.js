//Slick slider

$(document).ready(function(){
  $('.block-inside-1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    mobileFirst: true,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
  });

  $('.work-photo').slick({
    slidesToShow: 9,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          adaptiveHeight: true,
          variableWidth: true,
          arrows: false,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          adaptiveHeight: true,
          variableWidth: true,
          arrows: false,
          centerMode: true,
        }
      }
    ]
  });
});

//Smooth scrolling

$("a[href^='#']").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate({
      scrollTop: $(href).offset().top
  });

  return false;
});

