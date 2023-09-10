const appNav = () => {
    const navContainer = document.querySelector('.app-nav');
    const burgerButton = document.querySelector('.app-nav__burger');

    burgerButton?.addEventListener('click', () => {
        navContainer?.classList.toggle('active');
    });
};
export default appNav;
