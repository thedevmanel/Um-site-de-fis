const boxAnime = document.querySelectorAll("[data-animation-bio]") /* 470, 838, 1184, 1530 */
const normalAnimation = 'normal-div-animation'

function scrollPage() {
    const windowScroll = window.pageYOffset
    boxAnime.forEach(function(e) {
        if (windowScroll > e.offsetTop - ((window.innerHeight * 3) / 4)) {
            e.classList.add(normalAnimation)
        }
        console.log(e.offsetTop)
    })
}

window.addEventListener('scroll', () => {
    scrollPage()
})