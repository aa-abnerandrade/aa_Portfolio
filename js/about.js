const urlProfile = 'https://raw.githubusercontent.com/aa-abnerandrade/aa_portfolio/improvement-responsividadetotal/data/profile.json';

const urlLinksContact = 'https://raw.githubusercontent.com/aa-abnerandrade/aa_portfolio/improvement-responsividadetotal/data/contacts.json';


(async()=> {
    const jLinksSocial = await getFileData(urlLinksContact);
    showLinksSocialInAboutHTML(jLinksSocial);
    const jExperiences = await getFileData(urlProfile);
    showExperiencesInAboutHTML(jExperiences.professionalExperience);
})();


// (async ()=> {
//     const jProfileData = await getFileData(urlProfile);
//     showLinksContactInAboutHTML(jProfileData);
// })();


