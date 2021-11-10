const sliderCommentsInner = document.querySelector('.comments-slider');
const sliderComment = sliderCommentsInner.querySelector('.swiper');
if (sliderCommentsInner) {
  const comments = new Swiper(sliderComment, {
    slidesPerView: 2,
    spaceBetween: 10,
    autoHeight: true,
    setWrapperSize: true,
    navigation: {
      prevEl: '.swiper-btn-prev',
      nextEl: '.swiper-btn-next',
    },
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
    loop: true,
    breakpoints: {
      310: {
        slidesPerView: 1,
      },
      850: {
        slidesPerView: 2,
      }
    }
  });
}