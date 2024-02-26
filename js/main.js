//открывает меню бургера при клике на бургер
const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".navigation__items"); //вся ul
const navigation = document.querySelector(".navigation"); //вся ul


menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("btn--active");
  navigation.classList.toggle("menu__list--active");
});

//закрывает меню бургера при клики на меню
const menuItems = document.querySelectorAll(".navigation__item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuBtn.classList.toggle("btn--active");
    navigation.classList.toggle("menu__list--active");
  });
});

//структура для слайдера
const dataPhoto = [
  {
    src: "./images/skills/skills-1.jpg",
  },
  {
    src: "./images/skills/skills-2.jpg",
  },
  {
    src: "./images/skills/skills-3.jpg",
  },
  {
    src: "./images/skills/skills-4.jpg",
  },
  {
    src: "./images/skills/skills-5.jpg",
  },
  {
    src: "./images/skills/skills-6.jpg",
  },
  {
    src: "./images/skills/skills-7.jpg",
  },
];

//Формирование карточек для слайднра skills
const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperItems = dataPhoto.map(item => `
  <div class="swiper-slide">
    <div class="slide__inner">
      <img
        src=${item.src}
        alt=""
        class="slider-img"
      />
    </div>
  </div>
  `
)

swiperWrapper.innerHTML = swiperItems;


const windowWidth = window.innerWidth;
console.log(windowWidth);
//слайдер
if (windowWidth > 819) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
} else if (818 > windowWidth > 565 ) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
} else {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}