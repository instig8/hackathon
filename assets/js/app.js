function initialize() {
    const menuButton = document.querySelector('.menu')
    const body = document.querySelector('body')
    menuButton.addEventListener('click', (evt) => {
        evt.stopPropagation()
        body.classList.toggle('menu-open')
    })
}

initialize()