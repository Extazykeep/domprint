/* global Odometer */
const animateNumbers = () => {
    try {
        let notDone = true;
        const digitsSection = document.querySelector('#devices-count');
        const animatedNumbers = document.querySelectorAll(
            '[data-animate="number"]'
        );
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && notDone) {
                    animateDigits(animatedNumbers);
                    notDone = false;
                }
            });
        };
        const animateDigits = (digits) => {
            digits.forEach((number, index) => {
                number.textContent = 0;
                const animateTo = Number(number.getAttribute('data-number'));
                const od = new Odometer({
                    el: number,
                    duration: 5000,
                    format: ',ddd',
                });
                setTimeout(() => {
                    od.update(animateTo);
                }, 500 * index);
            });
        };

        if (animatedNumbers.length && digitsSection) {
            animatedNumbers.forEach((number) => {
                number.innerHTML = 0;
            });
        }
        if (digitsSection) {
            const options = { threshold: 0.1, rootMargin: '-200px 0px' };
            const observer = new IntersectionObserver(
                observerCallback,
                options
            );
            observer.observe(digitsSection);
        }
    } catch (e) {
        console.log(e);
    }
};
export default animateNumbers;
