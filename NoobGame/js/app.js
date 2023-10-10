/* Fonction générer nombre aléatoire pour les loot */

function generernombre() {
    const nombre = Math.round(Math.random()*100);
    return nombre;
}

/* La table de loot */
function loot(createItem){

    nb = generernombre()

    if (nb <= 30) {
        createItem('trash')
    }
    if (nb >= 31 && nb <= 55) {
        createItem('common')
    }
    if (nb >= 56 && nb <= 75) {
        createItem('uncommon')
    }
    if (nb >= 76 && nb <= 90) {
        createItem('rare')
    }
    if (nb >= 91 && nb <= 97) {
        createItem('epik')   
    }
    if (nb >= 98) {
        createItem('legendary')
    }
}

/* Créer le loot d'épée */
function createSword(quality){
    const placeSword = document.querySelector('#swordInventory')
    const sword = document.createElement("img");
    sword.src = "../img/sword.png";
    sword.classList.add('equipement', quality);
    placeSword.append(sword);
}
/* Créer le loot de bouclier */
function createShield(quality){
    const placeShield = document.querySelector('#shieldInventory')
    const shield = document.createElement("img");
    shield.src = "../img/shield.png";
    shield.classList.add('equipement', quality);
    placeShield.append(shield);
}
/* Créer le Loot d'armure */
function createArmor(quality){
    const placeArmor = document.querySelector('#armorInventory')
    const armor = document.createElement("img");
    armor.src = "../img/armor.png";
    armor.classList.add('equipement', quality);
    placeArmor.append(armor);
}

/* Phase de combats*/
const menuDisplay = document.querySelector('.game');

/* Portail combat épée*/
function fightPhaseSword(){
    const fightSwordDisplay = document.querySelector('.fightSword');
    menuDisplay.classList.toggle("hidden");
    fightSwordDisplay.classList.toggle("hidden");
    createPlayerLifeBar('#playerLifeBarSword');
    createEnnemyLifeBar('#ennemyLifeBarSword');
}

const buttonSwordDungeon = document.querySelector("#swordPortal");
buttonSwordDungeon.addEventListener("click", fightPhaseSword)

/* Portail combat bouclier*/
function fightPhaseShield(){
    const fightShieldDisplay = document.querySelector('.fightShield');

    menuDisplay.classList.toggle("hidden");
    fightShieldDisplay.classList.toggle("hidden");
    createPlayerLifeBarShield('#playerLifeBarShield');
    createEnnemyLifeBarShield('#ennemyLifeBarShield');
}

const buttonShieldDungeon = document.querySelector("#shieldPortal");
buttonShieldDungeon.addEventListener("click", fightPhaseShield)

/* Portail combat armure*/
function fightPhaseArmor(){
    const fightArmorDisplay = document.querySelector('.fightArmor');

    menuDisplay.classList.toggle("hidden");
    fightArmorDisplay.classList.toggle("hidden");
    createPlayerLifeBar('#playerLifeBarArmor');
    createEnnemyLifeBar('#ennemyLifeBarArmor');
}

const buttonArmorDungeon = document.querySelector("#armorPortal");
buttonArmorDungeon.addEventListener("click", fightPhaseArmor)

/* Fonctions des barres de vie */
let playerLifePoint = 10
let ennemyLifePoint = 10
/* Créer barre de vie joueur */
function createPlayerLifeBar(playerBar){

    const playerLifeBar = document.querySelector(playerBar);

    function clearPlayerLifeBar(){
        playerLifeBar.innerHTML = "";
    }

    clearPlayerLifeBar();
    
    for(let index = 0; index < playerLifePoint; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        playerLifeBar.append(lifePoint);
    }
}
/* Créer barre de vie ennemie */
function createEnnemyLifeBar(ennemyBar){

    const ennemyLifeBar = document.querySelector(ennemyBar);

    function clearEnnemyLifeBar(){
        ennemyLifeBar.innerHTML = "";
    }

    clearEnnemyLifeBar();
    
    for(let index = 0; index < ennemyLifePoint; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        ennemyLifeBar.append(lifePoint);
    }
}
/* Barre de vie du joueur*/

/* Barre de vie de l'ennemi*/


/* Barres de vie donjon bouclier*/

/* Barre de vie du joueur*/
function createPlayerLifeBarShield(){

    const playerLifeBarShield = document.querySelector('#playerLifeBarShield');

    function clearPlayerLifeBar(){
        playerLifeBarShield.innerHTML = "";
    }

    clearPlayerLifeBar();
    
    for(let index = 0; index < playerLifePoint; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        playerLifeBarShield.append(lifePoint);
    }
}

/* Barre de vie de l'ennemi*/
function createEnnemyLifeBarShield(){

    const ennemyLifeBarShield = document.querySelector('#ennemyLifeBarShield');

    function clearEnnemyLifeBar(){
        ennemyLifeBarShield.innerHTML = "";
    }

    clearEnnemyLifeBar();
    
    for(let index = 0; index < ennemyLifePoint; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        ennemyLifeBarShield.append(lifePoint);
    }
}

/* Fonctions de combats */
function calculatePlayerAttack(playerDamage){
    const ennemy = Math.round(Math.random()*3);
    const powerPlayerAttack = document.querySelector(playerDamage);
    powerPlayerAttack.textContent="Tu infliges " + ennemy + " points de dégats a l'ennemi";
    console.log("Ton attaque : " + ennemy);
    return ennemy;
}

function calculateEnnemyAttack(ennemyDamage){
    const ennemy = Math.round(Math.random()*3);
    const powerEnnemyAttack = document.querySelector(ennemyDamage);
    powerEnnemyAttack.textContent="L'ennemi t'inflige " + ennemy + " points de dégats";
    console.log("attaque de l'ennemi : " + ennemy);
    return ennemy;
}

/* Fonctions pour calculer les dégats */
function ennemyAttack(ennemyText){
    const hpPlayerDuringFight = playerLifePoint - calculateEnnemyAttack(ennemyText);
    return hpPlayerDuringFight;
    }

function playerAttack(playerText){
        const hpEnnemyDuringFight = ennemyLifePoint - calculatePlayerAttack(playerText);
        return hpEnnemyDuringFight;
    }

/* Fonction lancement dégats donjon épée + résultat combat*/
function fightSword() {
        ennemyLifePoint = playerAttack('#playerDamageTextSword')
        createEnnemyLifeBar('#ennemyLifeBarSword')
        playerLifePoint = ennemyAttack('#ennemyDamageTextSword');
        createPlayerLifeBar('#playerLifeBarSword');
        if (ennemyLifePoint <= 0 && playerLifePoint <= 0){
            alert("Match nul");
            fightPhaseSword();
            ennemyLifePoint = 10;
            playerLifePoint = 10;
        }
        if (ennemyLifePoint <= 0){
            alert("Tu as gagné !");
            winLootSword();
            ennemyLifePoint = 10;
            playerLifePoint = 10;
        }
        if (playerLifePoint <= 0){
            alert("Tu as perdu");
            fightPhaseSword();
            ennemyLifePoint = 10;
            playerLifePoint = 10;
        }
    }

function winLootSword(){
        fightPhaseSword();
        loot(createSword);
    }

const btnFightSword = document.querySelector('#imgFightButtonSword');
btnFightSword.addEventListener('click', fightSword);

/* Fonction lancement dégats donjon bouclier + résultat combat*/

function fightShield() {
    ennemyLifePoint = playerAttack('#playerDamageTextShield')
    createEnnemyLifeBar('#ennemyLifeBarShield')
    playerLifePoint = ennemyAttack('#ennemyDamageTextShield');
    createPlayerLifeBar('#playerLifeBarShield');
    if (ennemyLifePoint <= 0 && playerLifePoint <= 0){
        alert("Match nul");
        fightPhaseShield();
        ennemyLifePoint = 10;
        playerLifePoint = 10;
    }
    if (ennemyLifePoint <= 0){
        alert("Tu as gagné !");
        winLootShield();
        ennemyLifePoint = 10;
        playerLifePoint = 10;
    }
    if (playerLifePoint <= 0){
        alert("Tu as perdu");
        fightPhaseShield();
        ennemyLifePoint = 10;
        playerLifePoint = 10;
    }
}

function winLootShield(){
    fightPhaseShield();
    loot(createShield);
}

const btnFightShield = document.querySelector('#imgFightButtonShield');
btnFightShield.addEventListener('click', fightShield);

/* Fonction lancement dégats donjon armure + résultat combat*/

function fightArmor() {
    ennemyLifePoint = playerAttack('#playerDamageTextArmor')
    createEnnemyLifeBar('#ennemyLifeBarArmor')
    playerLifePoint = ennemyAttack('#ennemyDamageTextArmor');
    createPlayerLifeBar('#playerLifeBarArmor');
    if (ennemyLifePoint <= 0 && playerLifePoint <= 0){
        alert("Match nul");
        fightPhaseArmor();
        ennemyLifePoint = 10;
        playerLifePoint = 10;
    }
    if (ennemyLifePoint <= 0){
        alert("Tu as gagné !");
        winLootArmor();
        ennemyLifePoint = 10;
        playerLifePoint = 10;
    }
    if (playerLifePoint <= 0){
        alert("Tu as perdu");
        fightPhaseArmor();
        ennemyLifePoint = 10;
        playerLifePoint = 10;
    }
}

function winLootArmor(){
    fightPhaseArmor();
    loot(createArmor);
}

const btnFightArmor = document.querySelector('#imgFightButtonArmor');
btnFightArmor.addEventListener('click', fightArmor);


