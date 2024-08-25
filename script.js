let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}


/*================ scroll section action list ===============*/
let sections = document.querySelectionAll('section');
let navlinks = document.querySelectorAll('Header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight;
        let id = src.getAttribute('Id');

       if(top >= offset && top < offset + height){
        navlinks.forEach.apply(links => {
            links.clasList.remove('active');
            document.querySelector('header nav a [href*-' + id + ']').classList.add('active'); 
        });

    };
    });
}


