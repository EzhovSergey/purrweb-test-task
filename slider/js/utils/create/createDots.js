import { moveSlide } from "../index.js"

export const createDots = (number) => {
    const dots = document.createElement('div')
    dots.classList.add('dots')

    for (let index = 0; index < number; index++) {
        const newDot = document.createElement('button')
        newDot.classList.add('dots__item')
        newDot.setAttribute('dot-id', index)

        newDot.addEventListener('click', event => {
            moveSlide(() => 
                parseInt(event.target.getAttribute('dot-id'))
            )
        })

        dots.append(newDot)
    }

    return dots
}
