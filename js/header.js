
const bttMenuMore = document.querySelector('#icon__button');
const icoMenuMore = document.querySelector('#icon__text');
const lstMenuNavigation = document.querySelector('#menu__navigation');
let showNavigation = false;

bttMenuMore.addEventListener('click', (e)=> {
    if (!showNavigation) {
        lstMenuNavigation.classList.replace('menu__navigation--hidden', 'menu__navigation--show');
        icoMenuMore.classList.replace('uil-border-inner', 'uil-border-out');
        allMainPage.classList.add('addBlur');
        allFooter.classList.add('addBlur');
        showNavigation = true;
    } else if (showNavigation) {
        lstMenuNavigation.classList.replace('menu__navigation--show', 'menu__navigation--hidden');
        icoMenuMore.classList.replace('uil-border-out', 'uil-border-inner');
        allMainPage.classList.remove('addBlur');
        allFooter.classList.remove('addBlur');
        showNavigation = false;
    }
})

