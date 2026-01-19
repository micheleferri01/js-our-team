
function printCard (object){
    const cardsContainer = document.getElementById('cards-container');

    for(const member of object){
        cardsContainer.innerHTML += generateCard(member);
    }
}

function generateCard ({name, role, email, img}){
    const htmlCard = `
    <div class="card-container col">
        <img src="${img}" alt="${name}">
        <ul>
            <li class="card-name">${name}</li>
            <li>${role}</li>
            <li><a href="mailto:${email}" class="card-email">${email}</a></li>
        </ul>
    </div>`;
    return htmlCard;
}