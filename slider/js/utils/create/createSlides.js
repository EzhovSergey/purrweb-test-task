export const createSlides = slides => {
    slides.forEach((slide, i) => {
        slide.setAttribute('slide-id', i)
        slide.style.transform = `translateX(-430px)`
    });

    const cloneFirstSlide = slides[0].cloneNode(true)
    const cloneLastSlide = slides[slides.length-1].cloneNode(true)

    slides.forEach(slide => {
        slide.classList.add('slide-real')
    });

    return [cloneFirstSlide, cloneLastSlide]
}