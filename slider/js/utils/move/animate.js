import { getInitPositionSlides, drawSlide } from './index.js'

export function animate(step) {
    return new Promise((resolve) => {
        const ititPosition = getInitPositionSlides()
        const slides = document.querySelectorAll('.slides-item')
    
        let singleStep = 30
        let currentStep = step % singleStep
        singleStep *= Math.sign(step)
    
        let timer = setInterval(() => {
            if (Math.abs(currentStep) >= Math.abs(step)) {
                clearInterval(timer);
                resolve(ititPosition+currentStep);
            }
        
            drawSlide(slides, ititPosition, currentStep);
    
            currentStep += singleStep
        }, 20);
    });
    
}
