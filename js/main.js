
const urlProjects = 'https://raw.githubusercontent.com/aa-abnerandrade/meu_portfolio/improvement-responsividadetotal/data/projects.json';
const urlLinksContact = 'https://raw.githubusercontent.com/aa-abnerandrade/meu_portfolio/improvement-responsividadetotal/data/contacts.json';

(async ()=> {
    const jProjectsData = await getFileData(urlProjects);
    console.log(jProjectsData);
    showProjectsInMainHTML(jProjectsData);
})();

(async ()=> {
    const jContactData = await getFileData(urlLinksContact);
    showLinksContactInHeaderHTML(jContactData);
})();


const allMainPage = document.querySelector('.cont-main');






