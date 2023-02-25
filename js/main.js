
const urlProjects = 'https://raw.githubusercontent.com/aa-abnerandrade/meu_portfolio/improvement-responsividadetotal/data/projects.json';

(async ()=> {
    const jProjectsData = await getFileData(urlProjects);
    console.log(jProjectsData);
})();


const allMainPage = document.querySelector('.cont-main');






