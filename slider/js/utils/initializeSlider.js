import { createDots, createButtons, createSlides } from "./index.js"

export const initializeSlider = () => {
    const slider = document.querySelector('.slider')
    const slidesAll = slider.querySelector('.slides')
    const slides = slidesAll.querySelectorAll('.slides-item')

    const [cloneFirstSlide, cloneLastSlide] = createSlides(slides)
    const buttons = createButtons()
    const dots = createDots(slides.length)

    slider.append(...buttons, dots)

    if (slides.length) {
        slides[0].classList.add('slide-current')
        dots.children[0].classList.add('dot-current')
    }

    slidesAll.append(cloneFirstSlide)
    slidesAll.insertBefore(cloneLastSlide, slides[0])
}
