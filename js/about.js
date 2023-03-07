const urlProfile = 'https://raw.githubusercontent.com/aa-abnerandrade/meu_portfolio/improvement-responsividadetotal/data/profile.json';

const urlLinksContact = 'https://raw.githubusercontent.com/aa-abnerandrade/meu_portfolio/improvement-responsividadetotal/data/contacts.json';

(async ()=> {
    const jProfileData = await getFileData(urlProfile);
    console.log(jProfileData);
})();


