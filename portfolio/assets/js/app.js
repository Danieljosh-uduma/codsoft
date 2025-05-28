const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    // console.log(menuBtn.innerHTML)
    console.log(menu.classList.contains('hidden'))
    if (menu.classList.contains('hidden')) {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuBtn.style.color = '#fcfcfc';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        menuBtn.style.color = '#fcfcfc';
    }
});

let nav = document.getElementById('nav');

window.onload = () => {
    menu.style.marginLeft = '0px';
    menu.style.opacity = '1';
    nav.style.marginLeft = '0px';
    nav.style.opacity = '1';
}


