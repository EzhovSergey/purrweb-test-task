import { animate, drawSlide } from './index.js'

export const moveSlide = async (functionChoice) => {
    const withSlide = 420

    const slidesCount = document.querySelectorAll('.slide-real').length
    const currentSlide = document.querySelector('.slide-current')
    const currentIndex = parseInt(currentSlide.getAttribute('slide-id'))
    const slides = document.querySelectorAll('.slides-item')

    currentSlide.classList.remove('slide-current')
    document.querySelector('.dot-current').classList.remove('dot-current')

    let newIndex = functionChoice(currentIndex)
    const step = (newIndex-currentIndex)*withSlide

    const ititPosition = await animate(step)

    if(newIndex === -1) {
        drawSlide(slides, ititPosition, (slidesCount-2)*withSlide)
        newIndex = slidesCount-1
    } else if(newIndex === slidesCount) {
        drawSlide(slides, ititPosition, -(slidesCount-2)*withSlide)
        newIndex = 0
    }

    document.querySelector(`.slide-real[slide-id="${newIndex}"]`).classList.add('slide-current')
    document.querySelector(`.dots__item[dot-id="${newIndex}"]`).classList.add('dot-current')
} 