
const acordeonTriggers = document.querySelectorAll('.card__trigger');
console.log(acordeonTriggers);


acordeonTriggers.forEach((trigger)=> {
    console.log(acordeonTriggers);
    
    trigger.addEventListener('click', (e)=> {
        console.log('Trigger Clicado');
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('showAcordeon');

        let allOpen = document.querySelectorAll('.showAcordeon');
        console.log(allOpen);

        

        if (isOpen) {
            acordeon.classList.remove('showAcordeon');
        } else {
            allOpen.forEach((openedAcordeon)=> {
                openedAcordeon.classList.remove('showAcordeon');
            })
            acordeon.classList.add('showAcordeon');
        }

    })

    
})




