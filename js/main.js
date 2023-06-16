const toggle = document.querySelector("#toggle");
const navbar = document.querySelector("#nav");
const header = document.querySelector("#header");

document.onclick = function (e) {
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'nav'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        // console.log(toggle);
        // console.log(navbar);
    }
}
toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}
// console.log(toggle);

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide:'true',
  fade:'true',
  gragCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0: {
          slidesPerView:1,   
      },
      576:{
          slidesPerView:1,   
      },
      768:{
          slidesPerView:2,   
      },
      992:{
          slidesPerView:3,   
      },
      1240 :{
          slidesPerView:4, 
      }
  }
});

var acardion = document.getElementsByClassName('contenctBx');
for ( i = 0; i < acardion.length; i++) {
    acardion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    });
}

// Modal
let showModal = document.querySelector('.open_modal');
let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector('.close-modal');
let owerlay = document.querySelector('.modal_owerlay');
// Open Modal
const openModal = function(){
    modal.classList.remove('hidden');
    owerlay.classList.remove('hidden');
}

showModal.addEventListener('click', openModal)
// closeModal
const closeModal = function(){
    modal.classList.add('hidden');
    owerlay.classList.add('hidden');
}
closeModalBtn.addEventListener( 'click', closeModal);
owerlay.addEventListener( 'click', closeModal);

document.addEventListener( 'keydown' , function (evt) {
    if (evt.key === 'Escape'){
        closeModal()  
    }
})
closeModal()