export const drawSlide = (slides, ititPosition, currentStep) => {
    console.log('ititPosition, currentStep', ititPosition, currentStep);
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.transform = `translateX(${ititPosition-currentStep}px)`      
    }
}