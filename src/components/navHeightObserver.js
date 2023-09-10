const navHeightObserver = () => {
    const navMenu = document.querySelector('.app-nav');

    window.addEventListener('resize', () => {
        document.body.style.paddingTop =
            navMenu.offsetHeight + 'px' || 90 + 'px';
    });
};
export default navHeightObserver;
