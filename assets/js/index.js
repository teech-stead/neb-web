
$('.slider').slick();
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    adaptiveHeight: false
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
$("[data-step]").on("click", function(e) {
   
  $("[data-step]").removeClass("active");
  $(this).addClass("active");
  let target = $(this).data("step");
  $("." + target).addClass("show-form");
  $("." + target).siblings('[class^="step-"]').removeClass("show-form");
});

let stepForms = document.querySelectorAll('.stp-form')
let stepBtns = document.querySelectorAll('.box-yy')
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




