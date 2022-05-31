function modalWindow() {
    const menu = document.querySelector('.burger')
    const modal = document.querySelector('.modal')
    const close = document.querySelector('.close-btn')

        menu.addEventListener('click', () => {
            modal.style.display = 'flex'
        })

        close.addEventListener('click', () => {
            modal.style.display = ''
        })
}

modalWindow()