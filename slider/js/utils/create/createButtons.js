import { moveSlide } from "../index.js"

export const createButtons = () => {
    const buttonPrev = document.createElement('button')
    const buttonNext = document.createElement('button')

    buttonPrev.classList.add('button-prev', 'btn')
    buttonNext.classList.add('button-next', 'btn')

    buttonPrev.innerHTML = '&#10094;'
    buttonNext.innerHTML = '&#10095;'

    buttonPrev.addEventListener('click', () => {
        moveSlide(index => index - 1)
    })
    buttonNext.addEventListener('click', () => {
        moveSlide(index => index + 1)
    })

    return [buttonPrev, buttonNext]
}
