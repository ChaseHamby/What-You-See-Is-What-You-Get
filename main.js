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

let counter = 0;

// DONT FORGET THE CARD DISPLAY DIV IF YOU RUN INTO ISSUES //
const cardBuilder = () => {
    let newString = '';
    for (let i = 0; i < famousPeople.length; i++) {
        newString += `<div id='person${i}' class='personAll'>`;
        newString +=    `<h3 id='title${i}' class='title'>${famousPeople[i].title}</h3>`;
        newString +=    `<h4 id='name${i}' class='name'>${famousPeople[i].name}</h4>`;
        newString +=    `<p id='bio${i}' class='bio'>${famousPeople[i].bio}</p>`;
        newString +=    `<image id='image${i}' href=${famousPeople[i].image}>`;
        newString +=    `<p id='birth${i}' class='birth'>${famousPeople[i].lifespan.birth}</p>`;
        newString +=    `<p id='death${i}' class='death'>${famousPeople[i].lifespan.death}</h1>`;
        newString += `</div>`
    };
    printToDom(newString, 'container');
    for (let i = 0; i < famousPeople.length; i++) {
        let color = `person${i}`;
        if (i % 2 === 1) {
            document.getElementById(color).style.background = "lightblue";
        } else {
            document.getElementById(color).style.background = "lightyellow";
        };
    };
};
cardBuilder();
