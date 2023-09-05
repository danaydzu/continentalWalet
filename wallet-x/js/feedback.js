window.onload = () => {
    var swiper = new Swiper(".mySwiper", {

        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 30,
        speed:500,

        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-prev1",
          prevEl: ".swiper-button-next1 ",
        },
        // effect:'fade',
        // fadeEffect:{
        //     crossFade:true
        // },
        parallax:true,
        // autoplay: {
        //     delay: 5000,
    
        // }
      });
      
}
