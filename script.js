//Primero que nada, amor, me pegué un tiro haciendo esto y segundo, te amo mucho
//Pinches elementos
const interactionHint = document.getElementById("interaction-hint");
const dialogBox = document.getElementById("dialog-box");
const dialogText = document.getElementById("dialog-text");
const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const introScreen = document.getElementById("intro-screen");
const introMessage = document.getElementById("intro-message");
const gameScreen = document.getElementById("game-screen");
const endingScreen = document.getElementById("ending-screen");
const room = document.getElementById("room");
const player = document.getElementById("player");
const door = document.getElementById("door");
const bed = document.getElementById("bed");
const dresser = document.getElementById("dresser");
const chair = document.getElementById("chair");
const clothes = document.getElementById("clothes");
const shark = document.getElementById("shark");
const tv = document.getElementById("tv");
const gameConsole = document.getElementById("console");
const memoryScreen = document.getElementById("memory-screen");
const memoryCode = document.getElementById("memory-code");
const memoryTitle = document.getElementById("memory-title");
const memoryText = document.getElementById("memory-text");
const milowCard = document.getElementById("milow-card");
const hamster = document.getElementById("hamster");
const gameWindow = document.getElementById("window");
const smiskiOne = document.getElementById("smiski-one");
const smiskiTwo = document.getElementById("smiski-two");


//Objetos que interactuan

const interactions = [
{
object: shark,
text: "CHILD_01 // Shark\n\nGift acquired after 1 month of co-op.\nCurrent status: waiting for Dad."
},
{
object: bed,
text: "There's enough room for two. This was supposed to be temporary."
},
{
object: tv,
text: "memory01"
},
{
object: dresser,
text: "SHOPPING MISSION RESULTS\n\nItems acquired:\n1 shirt\nBoxers\n\nEverything else: REJECTED.\nPLAYER 2 Bien piqui para comprar, mi amorcito."
},
{
object: clothes,
text: "INVENTORY ERROR\n\nPLAYER 2 did not bring enough clothes.\nSolution found: wear PLAYER 1's."
},
{
object: gameConsole,
text: "memory02"
},
{
object: milowCard,
text: "memory03"
},
{
object: hamster,
text: "memory04"
},
{
object: smiskiOne,
text: "COLLECTION DATA\n\nSMISKI FOUND: 2\nCOLLECTION STATUS: INCOMPLETE\n\nSIDE QUEST:\nFind the rest together."
},
{
object: gameWindow,
text: "weather-easter-egg"
},
{
object: door,
text: "ending"
}
];


// Inicio

startButton.addEventListener("click", function () {

startScreen.style.display = "none";
introScreen.style.display = "block";

setTimeout(function () {
introMessage.textContent = "Initializing co-op session...";
}, 700);

setTimeout(function () {
introMessage.textContent = "Lovers detected: 2...";
}, 1500);

setTimeout(function () {
introMessage.textContent = "Loading love file: JUL_12_2026...";
}, 2400);

setTimeout(function () {
introScreen.style.display = "none";
gameScreen.style.display = "block";
spawnAtDoor();
}, 3000);

});


// MOVIMIENTO

let playerX = 100;
let playerY = 100;
let dialogOpen = false;
let memoryOpen = false;
let windowInteractions = 0;
let hamsterInteractions = 0;
let memory04Seen = false;
let memoryStep = 0;
let currentMemory = null;
let memoriesSeen = [];
const playerSpeed = 10;
const playerSize = 30;

function spawnAtDoor() {

//Con esta madre no pega con la fucking puerta ya me tenia harta
playerX = door.offsetLeft + door.offsetWidth + 40;
playerY = door.offsetTop - playerSize - 10;
player.style.left = playerX + "px";
player.style.top = playerY + "px";
}

function isColliding(object) {
const playerRect = player.getBoundingClientRect();
const objectRect = object.getBoundingClientRect();
return (
playerRect.right > objectRect.left &&
playerRect.left < objectRect.right &&
playerRect.bottom > objectRect.top &&
playerRect.top < objectRect.bottom
);
}
function isNear(object) {
const playerRect = player.getBoundingClientRect();
const objectRect = object.getBoundingClientRect();
const distance = 25;
return (
playerRect.right + distance > objectRect.left &&
playerRect.left - distance < objectRect.right &&
playerRect.bottom + distance > objectRect.top &&
playerRect.top - distance < objectRect.bottom
);
}

//Memorias bonitas pa llorar//

const memory01 = [
"DATE LOADED: JUL_12_2026",

"PLAYER 2 HAS JOINED THE SESSION.",

"INVENTORY UPDATED:\n3 giant bags of chips\nPingüinos\nJocoque\n...an irresponsible amount of snacks.",

"MEAL DISCOVERED:\nPollo en salsa verde + arroz con mantequilla.",

"PLAYER 2 liked it.\n\nCOOKING SKILL +1",

"NOW PLAYING:\nFriends",

"EXPECTED SESSION LENGTH:\n2–3 days.",

"ERROR: PLAYER 2 DID NOT LEAVE.",

"CO-OP MODE ENABLED."
];
const memory01Info = {
code: "MEMORY_01 // JUL_12_2026",
title: "PLAYER 2 HAS ARRIVED",
steps: memory01
};


const memory02 = [
"NEW EVENT DETECTED:\nRETRO GAME NIGHT",

"MULTIPLAYER SESSION STARTED.\n\nPLAYERS CONNECTED: 2",

"GAME LOADED:\nContra\n\nMISSION STATUS:\nSobrevivir un nivel.",

"GAME LOADED:\nIce Climber\n\nTEAMWORK STATUS:\n...six seven.",

"GAME LOADED:\nCircus\n\nPLAYER 1 STATUS:\nCreyó que me iba a ganar.",

"GAME LOADED:\nMario Kart\n\nFRIENDSHIP DAMAGE:\n¿Dónde quedó el player 1?",

"GAME LOADED:\nSuper Smash Bros.\n\nPEACE WAS NEVER AN OPTION.",

"NEW GAME DETECTED:\nCloverPit.\n\nNuevo vicio.",

"DAILY ROUTINE CREATED:\nBandle\n\nSTREAK STATUS:\nSomos unos cracks de la musica",

"SESSION ANALYSIS:\nAmo jugar contigo",

"ACHIEVEMENT UNLOCKED:\nPLAYER 1 + PLAYER 2\n\nCO-OP COMPATIBILITY: CONFIRMED."
];

const memory02Info = {
code: "MEMORY_02 // CO-OP_NIGHT",
title: "PLAYER 1 + PLAYER 2",
steps: memory02
};


const memory03 = [

"OUTSIDE EVENT DETECTED:\nMILOW NIGHT",

"PARTY SIZE: 4\n\nPLAYER 1\nPLAYER 2\nSISTER\nFRIEND",

"ACTIVITY LOADED:\nBOWLING",

"PLAYER 2 PERFORMANCE:\n...wtf nigga?",

"PLAYER 2 HAS OPENED:\nInternet tutorials.",

"NEW SKILL ACQUIRED:\nComo tirar la bola de boliche.",

"PLAYER 2 PERFORMANCE:\nMejoramos poquito",

"FINAL SCORE:\n\nWINNER: PLAYER 1\n\nObviamente",

"NEXT ACTIVITY:\nBillar",

"SKILL CHECK:\nEVERYONE FAILED.",

"TEAM MODE ENABLED:\nPLAYER 1 + PLAYER 2",

"MATCH RESULT:\nVICTORY.\n\nSomos un gran ecuipo",

"FINAL LOCATION:\nARCADE",

"ARCADE STATUS:\nGames detected: many.\nGames actually working: questionable.",

"PLAYER 2 CLAIM:\n\"Si le sé\"\n\nSOURCE:\nPorque lo jugó en el GTA.",

"REAL WORLD SKILL TRANSFER:\nFAILED.",

"ITEM ACQUIRED:\nMILOW CARD",

"ITEM OWNER:\nPLAYER 2",

"CURRENT LOCATION:\nPLAYER 1 INVENTORY.",

"MEMORY SAVED."
];
const memory03Info = {
code: "MEMORY_03 // MILOW_CARD",
title: "REAL WORLD MULTIPLAYER",
steps: memory03
};
const memory04 = [

    "NEW FAMILY MEMBER DETECTED.",

    "El Primogenito HAS JOINED THE PARTY.\n\nSpecies: Hamster... probably.\nStatus: extremely loved.",

    "DATE EVENT STARTED.",

    "DESTINATION:\nCinemex 4 Rios",

    "NOW PLAYING:\nThe Odyssey",

    "DATE STATUS:\nNueva foto familiar",

    "PLAYERS RETURNED HOME.",

    "LATE NIGHT CO-OP SESSION DETECTED.\n\nFurther details: CLASSIFIED.",

    "WARNING:\nUnexpected blood detected.",

    "PLAYER 2 STATUS:\nDoes not handle blood well.",

    "SYSTEM ALERT:\nPLAYER 2 is getting pale.",

    "PLAYER 2 STATUS UPDATE:\nDizzy.\nVery dizzy.",

    "PLAYER 1 STATUS:\nTrying not to laugh.",

    "EMERGENCY LEVEL:\nTechnically low.\nAccording to PLAYER 2: catastrophic.",

    "MEMORY RESULT:\nOne new baby.\nOne very good date.\nOne nearly defeated PLAYER 2.",

    "MEMORY SAVED."
];
const memory04Info = {
    code: "MEMORY_04 // FIRST_BABY",
    title: "FAMILY EXPANSION",
    steps: memory04
};
function typeText(text) {

    memoryText.textContent = "";

    let letter = 0;

    const typing = setInterval(function () {

    memoryText.textContent += text[letter];

    letter = letter + 1;

    if (letter >= text.length) {
            clearInterval(typing);
    }

    }, 25);
}
function showMemoryStep() {

    
    memoryText.classList.remove("memory-error");
    memoryText.classList.remove("memory-error-blink");

    
    if (memoryStep === 7) {

    memoryText.textContent = currentMemory.steps[memoryStep];

    memoryText.classList.add("memory-error");
    memoryText.classList.add("memory-error-blink");



    } else {

    typeText(currentMemory.steps[memoryStep]);
    }
}

function openMemory(memory) {

    currentMemory = memory;
    memoryOpen = true;
    memoryStep = 0;

   
    if (!memoriesSeen.includes(memory.code)) {
        memoriesSeen.push(memory.code);
    }

    memoryCode.textContent = currentMemory.code;
    memoryTitle.textContent = currentMemory.title;

    showMemoryStep();

    memoryScreen.style.display = "block";
}


document.addEventListener("keydown", function (event) {

    const previousX = playerX;
    const previousY = playerY;
// Si hay un dialogo abierto no te vas a poder mover iiiiihhh

if (dialogOpen === true && event.key !== "Escape") {
    return;
}
if (memoryOpen === true && event.key !== " ") {
    return;
}
   const key = event.key.toLowerCase();

if (key === "w") {
    playerY = playerY - playerSpeed;
}

if (key === "s") {
    playerY = playerY + playerSpeed;
}

if (key === "a") {
    playerX = playerX - playerSpeed;
}

if (key === "d") {
    playerX = playerX + playerSpeed;
}

// Avanzar el memory, espera que salga el texto porque si no va a valer vrga


if (event.key === " " && memoryOpen === true) {

    memoryStep = memoryStep + 1;

    if (memoryStep < currentMemory.steps.length) {

        showMemoryStep();

    } else {

        memoryScreen.style.display = "none";
        memoryOpen = false;
        memoryStep = 0;
        currentMemory = null;
    }

    return;
}

    // asi el coso ese no traspasa las paredes como fantasma check

    const roomWidth = room.clientWidth;
    const roomHeight = room.clientHeight;

    const minX = 0;
    const minY = 0;

    const maxX = roomWidth - playerSize;
    const maxY = roomHeight - playerSize;

    if (playerX < minX) {
        playerX = minX;
    }

    if (playerX > maxX) {
        playerX = maxX;
    }

    if (playerY < minY) {
        playerY = minY;
    }

    if (playerY > maxY) {
        playerY = maxY;
    }


    // Movimientos

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";


    // Chocar con los muebles

if (
    isColliding(bed) ||
    isColliding(dresser) ||
    isColliding(chair) ||
    isColliding(clothes)||
    isColliding(gameConsole) ||
    isColliding(hamster)
) {

    playerX = previousX;
    playerY = previousY;

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
}

// Objetos cercanos

let nearbyInteraction = null;
let closestDistance = Infinity;

for (const interaction of interactions) {

    if (isNear(interaction.object)) {

        const playerRect = player.getBoundingClientRect();
        const objectRect = interaction.object.getBoundingClientRect();

        const playerCenterX =
            playerRect.left + playerRect.width / 2;

        const playerCenterY =
            playerRect.top + playerRect.height / 2;

        const objectCenterX =
            objectRect.left + objectRect.width / 2;

        const objectCenterY =
            objectRect.top + objectRect.height / 2;

        const distanceX =
            playerCenterX - objectCenterX;

        const distanceY =
            playerCenterY - objectCenterY;

        const distance =
            Math.sqrt(
                distanceX * distanceX +
                distanceY * distanceY
            );

        if (distance < closestDistance) {
            closestDistance = distance;
            nearbyInteraction = interaction;
        }
    }
}
if (nearbyInteraction !== null && dialogOpen === false) {
    interactionHint.style.display = "block";
} else {
    interactionHint.style.display = "none";
}

// Interacciones

if (
    event.key === "e" &&
    nearbyInteraction !== null &&
    dialogOpen === false &&
    memoryOpen === false
) {

    interactionHint.style.display = "none";

// La tele abre MEMORY 01
if (nearbyInteraction.object === tv) {

    openMemory(memory01Info);

// La compu abre MEMORY 02
} else if (nearbyInteraction.object === gameConsole) {

    openMemory(memory02Info);

// La tarjeta abre MEMORY 03
} else if (nearbyInteraction.object === milowCard) {

    openMemory(memory03Info);

// Nuestro primer bebe abre MEMORY 04
} else if (nearbyInteraction.object === hamster) {

    hamsterInteractions = hamsterInteractions + 1;

    if (hamsterInteractions === 1) {

       
        openMemory(memory04Info);

    } else if (hamsterInteractions === 2) {

      
        dialogText.textContent =
            "CHILD_00 STATUS\n\nDad has been located.\nRequesting kisses.";

        dialogBox.style.display = "block";
        dialogOpen = true;

    } else if (hamsterInteractions === 3) {

       
        dialogText.textContent =
            "VOICE LINE DETECTED:\n\n\"LET ME TELL YOU SOMETHING...\"\n\nPLAYER 1 + PLAYER 2:\nUnable to stop saying this.";

        dialogBox.style.display = "block";
        dialogOpen = true;

    } else {

      
        dialogText.textContent =
            "CHILD_00 STATUS\n\nJust a baby doing baby things.";

        dialogBox.style.display = "block";
        dialogOpen = true;
    }


//El final, lloremos
} else if (nearbyInteraction.object === door) {

    if (memoriesSeen.length < 4) {

        dialogText.textContent =
            "EXIT LOCKED\n\nAún no te puedes ir, mi amor, tienes más por descubrir";

        dialogBox.style.display = "block";
        dialogOpen = true;

      } else {

        gameScreen.style.display = "none";
        endingScreen.style.display = "block";

        return;
    }






//VENTANA
} else if (nearbyInteraction.object === gameWindow) {

    windowInteractions = windowInteractions + 1;

    if (windowInteractions === 1) {

        dialogText.textContent =
            "WEATHER DATA\n\nParece que va a llover";

    } else if (windowInteractions === 2) {

        dialogText.textContent =
            "FORECAST UPDATE\n\nSip, va a llover";

    } else if (windowInteractions === 3) {

        dialogText.textContent =
            "LOCAL EXPERT REPORT\n\n\"Va a llover hasta las 3:00 a.m.\"";

    } else {

        dialogText.textContent =
            "CONFIDENCE LEVEL:\n¿a poco sí?";
    }

    dialogBox.style.display = "block";
    dialogOpen = true;


} else {

 
    dialogText.textContent = nearbyInteraction.text;
    dialogBox.style.display = "block";

    dialogOpen = true;
}
}
// Los dialogos los puedes cerrar con ESC

if (event.key === "Escape" && dialogOpen === true) {

    dialogBox.style.display = "none";
    dialogOpen = false;
}

});

// Gracias por llegar hasta aca joven, te amo mucho, muchas gracias por todo, feliz mes, te amo mucho mucho mucho