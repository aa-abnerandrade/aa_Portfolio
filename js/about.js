const urlProfile = 'https://raw.githubusercontent.com/aa-abnerandrade/meu_portfolio/improvement-responsividadetotal/data/profile.json';

(async ()=> {
    const jProfileData = await getFileData(urlProfile);
    console.log(jProfileData);
})();


