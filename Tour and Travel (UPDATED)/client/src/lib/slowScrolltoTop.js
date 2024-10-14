function slowScrollToTop(element, offset, duration) {
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY - offset; // Subtracting offset
    const distance = end - start;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress * (2 - progress); // Ease-in-out effect
        window.scrollTo(0, start + distance * ease);
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

export default slowScrollToTop;