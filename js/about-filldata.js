
const lstLinksSocialHome = document.querySelector('.sec-overview__social--list');
const lstLinksSocialFooter = document.querySelector('.cont-footer__social__list');

function showLinksSocialInAboutHTML(jsonLinksSocial) {
    const objLinkSoci = jsonLinksSocial.links;

    objLinkSoci.forEach((contact)=> {

        lstLinksSocialHome.innerHTML +=
        `
            <li>
                <a href="${contact.url}" target="_blank">
                    <i class="uil ${contact.icon}"></i>
                </a>
            </li>
        
        `;

        lstLinksSocialFooter.innerHTML += 
        `
            <li>
                <a href="${contact.url}" target="_blank">
                    <i class="uil ${contact.icon}"></i>
                </a>
            </li>
        `;
    })

}




