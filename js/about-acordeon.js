
const allMainPage = document.querySelector('.cont-main');
const acordeonTriggers = document.querySelectorAll('.card__trigger');

acordeonTriggers.forEach((trigger)=> {
    trigger.addEventListener('click', (e)=> {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('showAcordeon');

        if (isOpen) {
            acordeon.classList.remove('showAcordeon');
        } else {
            acordeon.classList.add('showAcordeon');
        }

    })
})