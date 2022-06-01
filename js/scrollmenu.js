function scrollmenu() {
    const nav = document.querySelector('#main')

        window.addEventListener('scroll', () => {
            if (nav.offsetTop > 1) {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 1)'     
            } else if (nav.offsetTop == 0) {
                nav.style.backgroundColor = 'rgba(255, 255, 255, .5)'
            }

        })
}
   

scrollmenu()