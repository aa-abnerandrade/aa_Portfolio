
const urlProjects = 'https://raw.githubusercontent.com/aa-abnerandrade/aa_portfolio/improvement-responsividadetotal/data/projects.json';
const urlLinksContact = 'https://raw.githubusercontent.com/aa-abnerandrade/aa_portfolio/improvement-responsividadetotal/data/contacts.json';

(async ()=> {
    const jProjectsData = await getFileData(urlProjects);
    showProjectsInMainHTML(jProjectsData);
})()
.then(()=> selectTriggers());

(async ()=> {
    const jContactData = await getFileData(urlLinksContact);
    showLinksContactInHeaderHTML(jContactData);
})();


const allMainPage = document.querySelector('.cont-main');






