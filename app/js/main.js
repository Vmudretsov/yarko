$(function() {

  $('.header__list-dropdown a').on('click', function(e){
      e.preventDefault;
  });

  $('.header__list-dropdown ul').hide();
  $('.header__list-span').on('click', function(){
    // $('.header__list-dropdown ul').slideToggle();
    $(this).next().slideToggle();
    $(this).toggleClass('header__list-span--active');
    $('.header__list-span span').show(800);
  });

  $('.header__burger').on('click', function(){
    $('.header__nav').toggleClass('header__nav--active');
    $(this).toggleClass('header__burger--active');
  });

  $('.header__close').on('click', function(){
    $('.header__nav').removeClass('header__nav--active');
  });

  $('.header__list-item--about ul li a').on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // $('.header__list-item--about ul').hide(300);

  $('.header__list-item--about').hover(function(){
    if ($(document).width() > 1000){
      $('.header__list-item--about ul').slideToggle();
    }
  });

  var product = new Swiper('.product__slider', {
    slidesPerView: 1,
    speed: 800,
    effect: 'fade',
    autoplay: {
      delay: 3000,
    },
    // breakpoints: {
    //   1200: {
    //     slidesPerView: 4,
    //     spaceBetween: 55,
    //   },
    //   1000: {
    //     slidesPerView: 4,
    //     spaceBetween: 35,
    //   },
    //   800: {
    //     slidesPerView: 3,
    //     spaceBetween: 35,
    //   },
    //   200: {
    //     slidesPerView: 2,
    //     spaceBetween: 30,
    //   },
    // },
    navigation: {
      nextEl: '.swiper-box-next',
      prevEl: '.swiper-box-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero,
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' 
          +
          '<span class="' + totalClass + '"></span>';
      }
    },
  });

  function addZero(num) {
    return (num > 9) ? num : '0' + num;
  }

  $('.product__arrow-prev').click(function(){
    product.slidePrev();
  });

  $('.product__arrow-next').click(function(){
    product.slideNext();
  });

      
  //  projects page

  $('.projects__layout-btns button').on('click', function () {
    $('.projects__layout-btns button').removeClass('projects__layout-btn--active');
    $(this).addClass('projects__layout-btn--active');
  });

  $('.projects__layout-list').on('click', function () {
    $('.projects__items').addClass('projects__items--list');
  });

  $('.projects__layout-grid').on('click', function () {
    $('.projects__items').removeClass('projects__items--list');
  });

  $('.projects__buttons button').on('click', function () {
    $('.projects__buttons button').removeClass('projects__button--active');
    $(this).addClass('projects__button--active');
  });

    //  product page

  $('.product__layout-btns button').on('click', function () {
    $('.product__layout-btns button').removeClass('product__layout-btn--active');
    $(this).addClass('product__layout-btn--active');
  });

  $('.product__layout-grid').on('click', function () {
    $('.product__inner-box').addClass('product__inner-box--grid');
  });

  $('.product__layout-list').on('click', function () {
    $('.product__inner-box').removeClass('product__inner-box--grid');
  });

  //  сменан темы

  // const btnTwo = document.querySelector('.header__color--two')
  const btn = document.querySelector('.header__color')
  const theme = document.querySelector('html') 

  theme.setAttribute('data-theme', 'light') 

  // btnTwo.addEventListener('click', () => { 
  //   if (theme.getAttribute('data-theme') === 'light') { 
  //     theme.setAttribute('data-theme', 'dark') 
  //   } else { 
  //     theme.setAttribute('data-theme', 'light') 
  //   }
  // })

    //  сменан темы адаптив

  btn.addEventListener('click', () => { 
    if (theme.getAttribute('data-theme') === 'light') {
      theme.setAttribute('data-theme', 'dark') 
    } else { 
      theme.setAttribute('data-theme', 'light') 
    }
  })

  var mixer = mixitup('.projects__items');
  
});