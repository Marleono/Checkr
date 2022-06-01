function modalWindow() {
    let modal = document.querySelector('.modal')
    let menu = document.querySelector('.burger')
    let close = document.querySelector('.close-btn')

        menu.addEventListener('click', () => {
            modal.style.display = 'block'
        })

        close.addEventListener('click', () => {
            modal.style.display = ''
        })
}

modalWindow()