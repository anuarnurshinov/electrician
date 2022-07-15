const slider = () => {
    const sliderList = document.querySelectorAll('.item')
    const sliderTextList = document.querySelectorAll('.table')
    let currentSlide = 0

    sliderTextList.forEach(el => {
        el.classList.add('active')

    });
    const idInterval = window.setInterval(() => {
        sliderList[currentSlide].toggleAttribute('hidden')

        currentSlide++
        if (currentSlide === 2) {
            currentSlide = 0
        }
    }, 3000)

}

export default slider