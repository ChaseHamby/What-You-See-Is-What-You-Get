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

const cardBuilder = () => {
    let newString = '';
    for (let i = 0; i < famousPeople.length; i++) {
        newString += `<div id='person${i}' class='personAll'>`;
        newString +=    `<h3 id='title${i}' class='title'>${famousPeople[i].title}</h3>`;
        newString +=    `<h4 id='name${i}' class='name'>${famousPeople[i].name}</h4>`;
        newString +=    `<p id='bio${i}' class='bio'>${famousPeople[i].bio}</p>`;
        newString +=    `<p id='birth${i}' class='birth'>${famousPeople[i].lifespan.birth}</p>`;
        newString +=    `<p id='death${i}' class='death'>${famousPeople[i].lifespan.death}</p>`;
        newString +=    `<img src="${famousPeople[i].image}">`
        newString += `</div>`
    };
    printToDom(newString, 'container');
// Color Coding Functionality //
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

// Dotted Border Functionality //

for (let i = 0; i < famousPeople.length; i++) {
    let bob = `person${i}`;
    document.getElementById(bob).addEventListener("click", function() {
        document.getElementById(bob).style.border = "dotted";
    });
};

// Focus Function //

function getFocus() {
    document.getElementById("inputText").focus();
};

// KeyUp Function // 

var outputEl = document.getElementById();

var fieldEl = document.getElementById("inputText");

fieldEl.addEventListener("keyup", function (event) {
    outputEl.innerHTML = event.target.value
});