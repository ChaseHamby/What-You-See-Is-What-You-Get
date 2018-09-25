const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const famousPeople = [
    {
    title: "Samurai Bogey",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747,death: 1797}
    },
    {
    title: "Samurai Shaman",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747,death: 1797}
    },
    {
    title: "Samurai Ted",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747,death: 1797}
    },
    {
    title: "Samurai Ulf",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747,death: 1797}
    }
]

const cardBuilder = () => {
    let newString = '';
    for (let i = 0; i < famousPeople.length; i++) {
        newString +=    `<h3 id='title' class='title'>${famousPeople[i].title}</h3>`;
        newString +=    `<h4 id='name' class='name'>${famousPeople[i].name}</h4>`;
        newString +=    `<p id='bio' class='bio'>${famousPeople[i].bio}</p>`;
        newString +=    `<image id='image' href=${famousPeople[i].image}>`;
        newString +=    `<p id='birth' class='birth'>${famousPeople[i].lifespan.birth}</p>`;
        newString +=    `<p id='death' class='death'>${famousPeople[i].lifespan.death}</h1>`;
    }
    printToDom(newString, 'cardDisplay');
};
cardBuilder();