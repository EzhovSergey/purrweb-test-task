export const getInitPositionSlides = () => {
    const ititPositionStr = document.querySelector('.slides-item').style.transform
    return Number(ititPositionStr.slice(11, -3))
}
