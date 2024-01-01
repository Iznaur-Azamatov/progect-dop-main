 new Swiper('.swiper', {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 24,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });

 new Swiper('.swiper-container', {
	loop: true, 
	slidesPerView: 8, 
	spaceBetween: 24, 
	navigation: { 
	  nextEl: '.swiper-button-next__two', 
	  prevEl: '.swiper-button-prev__two', 
	}, 
  });
  