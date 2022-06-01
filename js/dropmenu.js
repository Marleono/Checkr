function dropmenu() {
    const menuItems = document.querySelectorAll('.menu-links > li');
    

    function handleEnter() {
            const dropdown = this.querySelector('.dropdown')
            const links = document.querySelectorAll('li > a')
            dropdown.style.display = 'flex'
            links.forEach(link => link.addEventListener('mouseenter', () => {
                dropdown.style.borderTop = '1px solid black'
                link.style.color = 'black'
                link.style.fontWeight = '600'
                link.style.paddingBottom = '1rem'
                if (link.classList.contains('platf')) {
                    link.style.borderBottomStyle =  "solid";
                    link.style.borderBottomColor =  'rgb(0, 212, 196)';
                } else if (link.classList.contains('solut')) {
                    link.style.borderBottomStyle =  "solid";
                    link.style.borderBottomColor =  'rgb(246, 101, 65)';
                } else if (link.classList.contains('resour')) {
                    link.style.borderBottomStyle =  "solid";
                    link.style.borderBottomColor =  'rgb(251, 207, 75)'
                } else if (link.classList.contains('comp')) {
                    link.style.borderBottomStyle =  "solid";
                    link.style.borderBottomColor =  'rgb(3, 63, 147)'
                }
            }) 
            )
            links.forEach(link => link.addEventListener('mouseout', () => {
                link.style.color = 'grey'
                link.style.fontWeight = '300'
                link.style.borderBottomStyle =  "";
            }) 
            )
            
        }

    function handleLeave() {
            const dropdown = this.querySelector('.dropdown')
            dropdown.style.display = 'none'
        }

    menuItems.forEach(item => item.addEventListener('mouseenter', handleEnter))
    menuItems.forEach(item => item.addEventListener('mouseleave', handleLeave))


}

dropmenu()