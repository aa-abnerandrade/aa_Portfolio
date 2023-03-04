const secProjects = document.querySelector('#projects');


function showProjectsInMainHTML(jsonProjects) {
    const objProjects = jsonProjects.portfolio;

    objProjects.forEach((itemProject)=> {
        console.log(itemProject);
        secProjects.innerHTML += 
        `
            <section class="projects__card--acordeon">
                <button class="card__trigger" type="button">
                    <h3 class="trigger__title">${itemProject.name}</h3>
                </button>
                <div class="card__content">
                    <img class="card__content--screenshot" src="${itemProject.image}" alt="Imagem da Aplicação ${itemProject.name}">
                    <div class="card__content--btts">
                        <a class="allButtons card__button--repo" href="${itemProject.repository}" target="_blank">Repo</a>
                        <a class="allButtons card__button--page" href="${itemProject.demo}" target="_blank">Demo</a>
                    </div>
                </div>
            </section>        
        `;
    })
}