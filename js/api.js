
async function fetchProfileData() {
    const url = 'https://github.com/aa-abnerandrade/meu_portfolio/blob/improvement-responsividadetotal/data/profile.json';
    const fetching = await fetch(url);

    return fetching.json;
}

