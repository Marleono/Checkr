function scrollmenu() {
    const navTop = document.querySelector('.nav-wrap')
    const nav = document.querySelector('.nav-wrap')
    window.addEventListener('scroll', () => {
        if (nav.offsetTop > 1) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 1)'     
        }

    })
}

scrollmenu()