/*===============HEADER========================*/


$(function(){
   /*$("li:eq(0)").on("mouseenter",function(){
       $(".logo").css("color","#00D646");
   }); 
    $("li:eq(0)").on("mouseleave",function(){
       $(".logo").css("color","#939DAB");
   }); */
    
    $("li:eq(0)").on("mouseenter",function(){
        $(".home").css("color","#00D646");
   }); 
    $("li:eq(0)").on("mouseleave",function(){
        $(".home").css("color","#939DAB");
   }); 
    
    $("li:eq(1)").on("mouseenter",function(){
       $(".me").css("color","#00D646");
   }); 
    $("li:eq(1)").on("mouseleave",function(){
       $(".me").css("color","#939DAB");
   }); 
    
    $("li:eq(2)").on("mouseenter",function(){
       $(".skill").css("color","#00D646");
   }); 
    $("li:eq(2)").on("mouseleave",function(){
       $(".skill").css("color","#939DAB");
   }); 
    
    $("li:eq(3)").on("mouseenter",function(){
       $(".portfolio").css("color","#00D646");
   }); 
    $("li:eq(3)").on("mouseleave",function(){
       $(".portfolio").css("color","#939DAB");
   });   
    
    $("li:eq(4)").on("mouseenter",function(){
       $(".contacts").css("color","#00D646");
   }); 
    $("li:eq(4)").on("mouseleave",function(){
       $(".contacts").css("color","#939DAB");
   }); 
});



/*==================SLIDER===================*/


$(function() {
    $('.sl').slick({
    autoplay: true,
    autoplaySpeed: 2500, 
    speed: 1000,
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    });
});



/*===================SCROLL=====================*/



$(function() {
   var margin = -30; // переменная для контроля докрутки
   $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 900, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });
});





/*=================Mobile menu====================*/


function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
        menu.toggleClass('burger-menu_active');
        
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');

















