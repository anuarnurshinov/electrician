const questAndAnswer = () => {
    const accordeon = document.querySelector('.accordeon')


    accordeon.addEventListener('click', (e) => {
        const content = e.target.closest('.element').querySelector('.element-content')
        const element = e.target.closest('.accordeon').querySelector('.element')


        if (content.style.getPropertyValue("display") === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
        e.target.closest('.element').classList.toggle('active')
    })
}
export default questAndAnswer