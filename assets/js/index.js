
const nav = document.querySelectorAll('.primary-nav-list li a')
const currentLocation = window.location.href
const host = window.location.protocol + '//' + window.location.host + '/'
console.log(currentLocation)
console.log(host)
nav.forEach(nav => {
  if(currentLocation !== host){
    if(nav.href.length > 4){
      if(nav.href.match(currentLocation)){
        if(!nav.href.match('#')){
          nav.classList.add('active')
          if(nav.classList.contains('dropdown-item')){
            nav.parentElement.parentElement.children[0].classList.add('active')
          }
        }
      }
    }
  }
})


const slider = document.querySelector('.slider')
if(slider) {
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    adaptiveHeight: false
  });
}
  $("#menu-toggler").on("click", function(e) {
   $('.search-wrap').slideToggle()
});
  $(".menu-toggler-btn").on("click", function(e) {
   $('.primary-nav').toggleClass('active')
});
  $("[data-targetit]").on("click", function(e) {
   
    $("[data-targetit]").removeClass("active");
    $(this).addClass("active");
    let target = $(this).data("targetit");
    $("." + target).addClass("active");
    $("." + target).siblings('[class^="tab-"]').removeClass("active");
});
  $(".accor-zz").on("click", function(e) {
    $('.accor-zz').removeClass('active-io');
    $(this).addClass('active-io');
    $(this).siblings('div').find('.accor-vv').slideToggle();
    $('.accor-zz:not(.active-io)').siblings('div').find('.accor-vv').slideUp();
    console.log("yes")
});


let step = 0
let stepForms = document.querySelectorAll('.stp-form')
let stepBtns = document.querySelectorAll('.box-yy')
$("[data-step]").on("click", function(e) {
  $("[data-step]").removeClass("active");
  $(this).addClass("active");
  let stpUpdate = $(this).data("stepnum");
  let target = $(this).data("step");
  step = stpUpdate - 1
  console.log(step)
  $("." + target).addClass("show-form");
  $("." + target).siblings('[class^="step-"]').removeClass("show-form");

});

$(".next").on("click", function(e) {
  step += 1
  stepForms.forEach(f => {
    f.classList.remove('show-form')
  })
  stepBtns.forEach(bt => {
    bt.classList.remove('active')
  })
 stepForms[step].classList.add('show-form')
 stepBtns[step].classList.add('active')
 stepBtns[step].removeAttribute('disabled', 'true')
 console.log('working')
});




