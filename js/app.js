const projectsSection = document.querySelector('.projects .container');
const projectsContainer = document.querySelector('.projectsContainer');


projectsSection.appendChild(projectsContainer);

for (let i = 0; i < projects.length; i++) {
    const projectsList = projects[i];
    const cardContent = document.createElement('div');
    cardContent.className = 'cardContent clearfix';

    const btnCont = document.createElement('div');
    const btnCont2 = document.createElement('div');
    btnCont.className = 'btnCont';
    btnCont2.className = 'btnCont2';

    const card = document.createElement('div');
    card.className = 'card ' + 'card-' + (i + 1);
    
    const image = document.createElement('img');
    image.src = 'img/' + projectsList.img_url;
    card.appendChild(image);

    const name = document.createElement('div');
    name.className = 'cardTitle';
    cardContent.appendChild(name);
    name.textContent = projectsList.name;

    const description = document.createElement('div');
    description.className = 'cardDescription';
    cardContent.appendChild(description);
    description.textContent = projectsList.description;

    const url = document.createElement('a');
    url.href = 'https://fwzmhmd.github.io/' + projectsList.source;
    url.className = 'btn btn-view';
    url.textContent = 'view';
    url.target = '_blank';
    btnCont.appendChild(url);
    cardContent.appendChild(btnCont);
    
    const source = document.createElement('a');
    source.href = 'https://github.com/fwzmhmd/' + projectsList.source;
    source.className = 'btn btn-source';
    source.textContent = 'source code';
    source.target = '_blank';
    btnCont2.appendChild(source);
    cardContent.appendChild(btnCont2);

    card.appendChild(cardContent);
    
    projectsContainer.appendChild(card);
}

