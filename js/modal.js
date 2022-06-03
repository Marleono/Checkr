function modalWindow() {
    let modal = document.querySelector('.modal')
    let menu = document.querySelectorAll('.burger')
    let close = document.querySelector('.close-btn')

        menu.forEach(burgers => burgers.addEventListener('click', () => {
            modal.style.display = 'block'
        }))

        close.addEventListener('click', () => {
            modal.style.display = ''
        })
}

modalWindow()