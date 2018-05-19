function initialize() {
    const menuButton = document.querySelector('.menu')
    const navLinks = document.querySelectorAll('nav a')
    const body = document.querySelector('body')
    menuButton.addEventListener('click', (evt) => {
        evt.stopPropagation()
        body.classList.toggle('menu-open')
    })
    navLinks.forEach((link) => {
        link.addEventListener('click', (evt) => {
            evt.stopPropagation()
            body.classList.toggle('menu-open')
        })
    })
}

initialize()