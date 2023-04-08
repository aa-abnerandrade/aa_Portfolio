
const lstLinksSocialHome = document.querySelector('.sec-overview__social--list');
const lstExperiences = document.querySelector('.sec-faculties__card__content__list-experiences');
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


function showExperiencesInAboutHTML(jsonExperiences) {

    lstExperiences.innerHTML += 
    jsonExperiences.map(exp=> 
        `
            <dt>${exp.title}</dt>
            <dd>${exp.description}</dd>
        
        `
    ).join('');


}




