
const urlProfile = 'https://raw.githubusercontent.com/aa-abnerandrade/aa_Portfolio/release/data/profile.json';

const urlLinksContact = 'https://raw.githubusercontent.com/aa-abnerandrade/aa_Portfolio/release/data/contacts.json';


(async()=> {
    const jLinksSocial = await getFileData(urlLinksContact);
    showLinksSocialInAboutHTML(jLinksSocial);
    const jExperiences = await getFileData(urlProfile);
    showExperiencesInAboutHTML(jExperiences.professionalExperience);
})();


