
function printCard (object){
    const cardsContainer = document.getElementById('cards-container');

    let cardHtml = "";

    for(const member of object){
        cardHtml += generateCard(member);
    }

    cardsContainer.innerHTML = cardHtml
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

function handleAddNewMember(e){
    e.preventDefault();
    const name = inputName.value;
    const role = inputRole.value;
    const email = inputEmail.value;
    const img = inputProfileImage.value;

    const newMember = {name, role, email, img};

    teamMembers.push(newMember);

    printCard(teamMembers);
}