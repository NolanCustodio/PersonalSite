
function IntersectionObserver() {

    const startAnimation = (entities, observer) => {
        entities.forEach(entry => {
            entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
        });
    };

    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshhold: 1 };

    const elements = document.querySelectorAll('.all-tech-icons');

    elements.forEach(el => {
        observer.observe(el, options);
    });


}

export default IntersectionObserver;