const scrollTopBtnObserver = () => {
    try {
        const mainSection = document.querySelector('#main');
        const scrollTopBtn = document.querySelector('#back-top');
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (scrollTopBtn) {
                    if (entry.isIntersecting) {
                        scrollTopBtn.classList.add('hiden');
                    } else scrollTopBtn.classList.remove('hiden');
                }
            });
        };
        const options = { threshold: 0.2, rootMargin: '20px 0px' };
        const mainObserver = new IntersectionObserver(callback, options);

        if (mainSection) {
            mainObserver.observe(mainSection);
        }
    } catch (e) {
        console.log(e);
    }
};
export default scrollTopBtnObserver;
