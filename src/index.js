/*
 * External dependencies
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/*
 * Internal dependencies
 */
import './styles/style.scss';
import form from './components/form';
import appNav from './components/appNav';
import animateNumbers from './components/animateNumbers';
import navHeightObserver from './components/navHeightObserver';
import './components/odometer';
import './styles/odometer.scss';
import swiperInit from './components/swiperInit';
import scrollTopBtnObserver from './components/scrollTopBtnObserver';

document.addEventListener('DOMContentLoaded', () => {
    form();
    appNav();
    swiperInit();
    animateNumbers();
    navHeightObserver();
    scrollTopBtnObserver();
});
