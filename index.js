function toggleMenu() {
    let link = document.getElementsByClassName('nav-text')
    for (let i = 0; i<link.length; i++) {
       
        link[i].classList.toggle('show');
    }
}