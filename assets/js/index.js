// slider script
// $('.slider').slick();
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
    $(this).siblings('div').find('.ool-para').slideToggle();
    $('.accor-zz:not(.active-io)').siblings('div').find('.ool-para').slideUp();
    console.log("yes")
});
console.log("jhasdfj")