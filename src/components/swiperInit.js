import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';

const swiperInit = () => {
    new Swiper('.swiper', {
        autoplay: {
            delay: 5000,
        },
        grabCursor: true,
        freeMode: true,
        slidesPerView: 2,
        breakpoints: {
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
};
export default swiperInit;
