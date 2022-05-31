function scrollmenu() {
    const navTop = document.querySelector('nav')
    const nav = document.querySelector('nav')
    window.addEventListener('scroll', () => {
        if (nav.offsetTop > 1) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 1)'     
        }

    })
}

scrollmenu()