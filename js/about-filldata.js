
const lstLinksSocialHome = document.querySelector('.sec-overview__social--list');
const lstLinksSocialFooter = document.querySelector('.cont-footer__social__list');

function showLinksSocialInAboutHTML(jsonLinksSocial) {

    lstLinksSocialHome.innerHTML +=
    jsonLinksSocial.links.map(contact=> 
        `
            <li>
                <a href="${contact.url}" target="_blank">
                    <i class="uil ${contact.icon}"></i>
                </a>
            </li>
        `
    ).join('');


    lstLinksSocialFooter.innerHTML +=
    jsonLinksSocial.links.map(contact=>
        `
            <li>
                <a href="${contact.url}" target="_blank">
                    <i class="uil ${contact.icon}"></i>
                </a>
            </li>
        `         
    ).join('');

}




