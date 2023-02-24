
const urlProjects = 'https://raw.githubusercontent.com/aa-abnerandrade/meu_portfolio/improvement-responsividadetotal/data/projects.json';

(async ()=> {
    const jProjectsData = await getFileData(urlProjects);
    console.log(jProjectsData);
})();


const allMainPage = document.querySelector('.cont-main');


// const acordeonTriggers = document.querySelectorAll('.card__trigger');

// acordeonTriggers.forEach((trigger)=> {
//     trigger.addEventListener('click', (e)=> {
//         const acordeon = trigger.parentElement;
//         const isOpen = acordeon.classList.contains('showAcordeon');

//         if (isOpen) {
//             acordeon.classList.remove('showAcordeon');
//         } else {
//             acordeon.classList.add('showAcordeon');
//         }

//     })
// })




