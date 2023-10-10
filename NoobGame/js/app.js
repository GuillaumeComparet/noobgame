/* Fonction générer nombre aléatoire pour les loot */

function generernombre() {
    const nombre = Math.round(Math.random()*100);
    return nombre;
}

/* Déclencher le loot d'épée */

function createSword(quality){
    const placeSword = document.querySelector('#swordInventory')
    const sword = document.createElement("img");
    sword.src = "../img/sword.png";
    sword.classList.add('equipement', quality);
    placeSword.append(sword);
}

function lootSword(){

    nb = generernombre()

    if (nb <= 30) {
        createSword('trash')
    }
    if (nb >= 31 && nb <= 55) {
        createSword('common')
    }
    if (nb >= 56 && nb <= 75) {
        createSword('uncommon')
    }
    if (nb >= 76 && nb <= 90) {
        createSword('rare')
    }
    if (nb >= 91 && nb <= 97) {
        createSword('epik')   
    }
    if (nb >= 98) {
        createSword('legendary')
    }
}
/*Déclencher le loot de bouclier */

function createShield(quality){
    const placeShield = document.querySelector('#shieldInventory')
    const shield = document.createElement("img");
    shield.src = "../img/shield.png";
    shield.classList.add('equipement', quality);
    placeShield.append(shield);
}

function lootShield(){

    nb = generernombre()

    if (nb <= 30) {
        createShield('trash')
    }
    if (nb >= 31 && nb <= 55) {
        createShield('common')
    }
    if (nb >= 56 && nb <= 75) {
        createShield('uncommon')
    }
    if (nb >= 76 && nb <= 90) {
        createShield('rare')
    }
    if (nb >= 91 && nb <= 97) {
        createShield('epik')   
    }
    if (nb >= 98) {
        createShield('legendary')
    }
}

/* Loot d'armure */

function createArmor(quality){
    const placeArmor = document.querySelector('#armorInventory')
    const armor = document.createElement("img");
    armor.src = "../img/armor.png";
    armor.classList.add('equipement', quality);
    placeArmor.append(armor);
}
function lootArmor(){

    nb = generernombre()

    if (nb <= 30) {
        createArmor('trash')
    }
    if (nb >= 31 && nb <= 55) {
        createArmor('common')
    }
    if (nb >= 56 && nb <= 75) {
        createArmor('uncommon')
    }
    if (nb >= 76 && nb <= 90) {
        createArmor('rare')
    }
    if (nb >= 91 && nb <= 97) {
        createArmor('epik')   
    }
    if (nb >= 98) {
        createArmor('legendary')
    }
}

/* Phase de combats*/
const menuDisplay = document.querySelector('.game');
/* Portail combat épée*/

function fightPhaseSword(){
    const fightSwordDisplay = document.querySelector('.fightSword');
    menuDisplay.classList.toggle("hidden");
    fightSwordDisplay.classList.toggle("hidden");
    createPlayerLifeBarSword();
    createEnnemyLifeBarSword();
}

const buttonSwordDungeon = document.querySelector("#swordPortal");
buttonSwordDungeon.addEventListener("click", fightPhaseSword)

/* Portail combat bouclier*/

function fightPhaseShield(){
    const fightShieldDisplay = document.querySelector('.fightShield');

    menuDisplay.classList.toggle("hidden");
    fightShieldDisplay.classList.toggle("hidden");
    createPlayerLifeBarShield();
    createEnnemyLifeBarShield();
}

const buttonShieldDungeon = document.querySelector("#shieldPortal");
buttonShieldDungeon.addEventListener("click", fightPhaseShield)

/* Portail combat armure*/
function fightPhaseArmor(){
    const fightArmorDisplay = document.querySelector('.fightArmor');

    menuDisplay.classList.toggle("hidden");
    fightArmorDisplay.classList.toggle("hidden");
    createPlayerLifeBarArmor();
    createEnnemyLifeBarArmor();
}

const buttonArmorDungeon = document.querySelector("#armorPortal");
buttonArmorDungeon.addEventListener("click", fightPhaseArmor)

/* Fonctions de combats */

function calculatePlayerAttack(){
    const ennemy = Math.round(Math.random()*3);
    console.log("Ton attaque : " + ennemy);
    return ennemy;
}

function calculateEnnemyAttack(){
    const powerEnnemyAttack = document.querySelector('.fight')

    const ennemy = Math.round(Math.random()*3);
    console.log("attaque de l'ennemi : " + ennemy);
    return ennemy;
}

/* Barres de vie donjon épée*/

/* Barre de vie du joueur*/
let playerLifePointSword = 10
function createPlayerLifeBarSword(){

    const playerLifeBarSword = document.querySelector('#playerLifeBarSword');

    function clearPlayerLifeBar(){
        playerLifeBarSword.innerHTML = "";
    }

    clearPlayerLifeBar();
    
    for(let index = 0; index < playerLifePointSword; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        playerLifeBarSword.append(lifePoint);
    }
}

/* Barre de vie de l'ennemi*/
let ennemyLifePointSword = 10
function createEnnemyLifeBarSword(){

    const ennemyLifeBarSword = document.querySelector('#ennemyLifeBarSword');

    function clearEnnemyLifeBar(){
        ennemyLifeBarSword.innerHTML = "";
    }

    clearEnnemyLifeBar();
    
    for(let index = 0; index < ennemyLifePointSword; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        ennemyLifeBarSword.append(lifePoint);
    }
}

/* Barres de vie donjon bouclier*/

/* Barre de vie du joueur*/
let playerLifePointShield = 10
function createPlayerLifeBarShield(){

    const playerLifeBarShield = document.querySelector('#playerLifeBarShield');

    function clearPlayerLifeBar(){
        playerLifeBarShield.innerHTML = "";
    }

    clearPlayerLifeBar();
    
    for(let index = 0; index < playerLifePointShield; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        playerLifeBarShield.append(lifePoint);
    }
}

/* Barre de vie de l'ennemi*/
let ennemyLifePointShield = 10
function createEnnemyLifeBarShield(){

    const ennemyLifeBarShield = document.querySelector('#ennemyLifeBarShield');

    function clearEnnemyLifeBar(){
        ennemyLifeBarShield.innerHTML = "";
    }

    clearEnnemyLifeBar();
    
    for(let index = 0; index < ennemyLifePointShield; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        ennemyLifeBarShield.append(lifePoint);
    }
}

/* Barres de vie donjon armure*/

/* Barre de vie du joueur*/
let playerLifePointArmor = 10
function createPlayerLifeBarArmor(){

    const playerLifeBarArmor = document.querySelector('#playerLifeBarArmor');

    function clearPlayerLifeBar(){
        playerLifeBarArmor.innerHTML = "";
    }

    clearPlayerLifeBar();
    
    for(let index = 0; index < playerLifePointArmor; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        playerLifeBarArmor.append(lifePoint);
    }
}

/* Barre de vie de l'ennemi*/
let ennemyLifePointArmor = 10
function createEnnemyLifeBarArmor(){

    const ennemyLifeBarArmor = document.querySelector('#ennemyLifeBarArmor');

    function clearEnnemyLifeBar(){
        ennemyLifeBarArmor.innerHTML = "";
    }

    clearEnnemyLifeBar();
    
    for(let index = 0; index < ennemyLifePointArmor; index++){
        const lifePoint = document.createElement('img');
        lifePoint.classList.add('pointLife')
        lifePoint.src = '../img/lifeheart.png';
        ennemyLifeBarArmor.append(lifePoint);
    }
}


/* Fonctions de combats */

/* Combat épée */
function calculatePlayerAttackSword(){
    const ennemy = Math.round(Math.random()*3);
    const powerPlayerAttackSword = document.querySelector('#playerDamageTextSword');
    powerPlayerAttackSword.textContent="Tu infliges " + ennemy + " points de dégats a l'ennemi";
    console.log("Ton attaque : " + ennemy);
    return ennemy;
}

function calculateEnnemyAttackSword(){
    const ennemy = Math.round(Math.random()*3);
    const powerEnnemyAttackSword = document.querySelector('#ennemyDamageTextSword');
    powerEnnemyAttackSword.textContent="L'ennemi t'inflige " + ennemy + " points de dégats";
    console.log("attaque de l'ennemi : " + ennemy);
    return ennemy;
}

function ennemyAttackPhaseSword(){

    function ennemyAttack(){
    const hpPlayerDuringFight = playerLifePointSword - calculateEnnemyAttackSword();
    return hpPlayerDuringFight;
    }

    playerLifePointSword = ennemyAttack();

    createPlayerLifeBarSword();
    }

function playerAttackPhaseSword(){

    function playerAttack(){
        const hpEnnemyDuringFight = ennemyLifePointSword - calculatePlayerAttackSword();
        return hpEnnemyDuringFight;
    }
    
    ennemyLifePointSword = playerAttack();
    
    createEnnemyLifeBarSword();
    }

    function fightSword() {
        playerAttackPhaseSword();
        ennemyAttackPhaseSword();
        if (ennemyLifePointSword <= 0 && playerLifePointSword <= 0){
            alert("Match nul");
            fightPhaseSword();
            ennemyLifePointSword = 10;
            playerLifePointSword = 10;
        }
        if (ennemyLifePointSword <= 0){
            alert("Tu as gagné !");
            winLootSword();
            ennemyLifePointSword = 10;
            playerLifePointSword = 10;
        }
        if (playerLifePointSword <= 0){
            alert("Tu as perdu");
            fightPhaseSword();
            ennemyLifePointSword = 10;
            playerLifePointSword = 10;
        }
    }

    function winLootSword(){
        fightPhaseSword();
        lootSword();
    }

const btnFightSword = document.querySelector('#imgFightButtonSword');
btnFightSword.addEventListener('click', fightSword);

/* Combat bouclier */
function calculatePlayerAttackShield(){
    const ennemy = Math.round(Math.random()*3);
    const powerPlayerAttackShield = document.querySelector('#playerDamageTextShield');
    powerPlayerAttackShield.textContent="Tu infliges " + ennemy + " points de dégats a l'ennemi";
    console.log("Ton attaque : " + ennemy);
    return ennemy;
}

function calculateEnnemyAttackShield(){
    const ennemy = Math.round(Math.random()*3);
    const powerEnnemyAttackShield = document.querySelector('#ennemyDamageTextShield');
    powerEnnemyAttackShield.textContent="L'ennemi t'inflige " + ennemy + " points de dégats";
    console.log("attaque de l'ennemi : " + ennemy);
    return ennemy;
}

function ennemyAttackPhaseShield(){

    function ennemyAttack(){
    const hpPlayerDuringFight = playerLifePointShield - calculateEnnemyAttackShield();
    return hpPlayerDuringFight;
    }

    playerLifePointShield = ennemyAttack();

    createPlayerLifeBarShield();
    }

function playerAttackPhaseShield(){

    function playerAttack(){
        const hpEnnemyDuringFight = ennemyLifePointShield - calculatePlayerAttackShield();
        return hpEnnemyDuringFight;
    }
    
    ennemyLifePointShield = playerAttack();
    
    createEnnemyLifeBarShield();
    }

function fightShield() {
    playerAttackPhaseShield();
    ennemyAttackPhaseShield();
    if (ennemyLifePointShield <= 0 && playerLifePointShield <= 0){
        alert("Match nul");
        fightPhaseShield();
        ennemyLifePointShield = 10;
        playerLifePointShield = 10;
    }
    if (ennemyLifePointShield <= 0){
        alert("Tu as gagné !");
        winLootShield();
        ennemyLifePointShield = 10;
        playerLifePointShield = 10;
    }
    if (playerLifePointShield <= 0){
        alert("Tu as perdu");
        fightPhaseShield();
        ennemyLifePointShield = 10;
        playerLifePointShield = 10;
    }
}

function winLootShield(){
    fightPhaseShield();
    lootShield();
}

const btnFightShield = document.querySelector('#imgFightButtonShield');
btnFightShield.addEventListener('click', fightShield);

/* Combat armure */

function calculatePlayerAttackArmor(){
    const ennemy = Math.round(Math.random()*3);
    const powerPlayerAttackArmor = document.querySelector('#playerDamageTextArmor');
    powerPlayerAttackArmor.textContent="Tu infliges " + ennemy + " points de dégats a l'ennemi";
    console.log("Ton attaque : " + ennemy);
    return ennemy;
}

function calculateEnnemyAttackArmor(){
    const ennemy = Math.round(Math.random()*3);
    const powerEnnemyAttackArmor = document.querySelector('#ennemyDamageTextArmor');
    powerEnnemyAttackArmor.textContent="L'ennemi t'inflige " + ennemy + " points de dégats";
    console.log("attaque de l'ennemi : " + ennemy);
    return ennemy;
}
function ennemyAttackPhaseArmor(){

    function ennemyAttack(){
    const hpPlayerDuringFight = playerLifePointArmor - calculateEnnemyAttackArmor();
    return hpPlayerDuringFight;
    }

    playerLifePointArmor = ennemyAttack();

    createPlayerLifeBarArmor();
    }

function playerAttackPhaseArmor(){

    function playerAttack(){
        const hpEnnemyDuringFight = ennemyLifePointArmor - calculatePlayerAttackArmor();
        return hpEnnemyDuringFight;
    }
    
    ennemyLifePointArmor = playerAttack();
    
    createEnnemyLifeBarArmor();
    }

function fightArmor() {
    playerAttackPhaseArmor();
    ennemyAttackPhaseArmor();
    if (ennemyLifePointArmor <= 0 && playerLifePointArmor <= 0){
        alert("Match nul");
        fightPhaseArmor();
        ennemyLifePointArmor = 10;
        playerLifePointArmor = 10;
    }
    if (ennemyLifePointArmor <= 0){
        alert("Tu as gagné !");
        winLootArmor();
        ennemyLifePointArmor = 10;
        playerLifePointArmor = 10;
    }
    if (playerLifePointArmor <= 0){
        alert("Tu as perdu");
        fightPhaseArmor();
        ennemyLifePointArmor = 10;
        playerLifePointArmor = 10;
    }
}

function winLootArmor(){
    fightPhaseArmor();
    lootArmor();
}

const btnFightArmor = document.querySelector('#imgFightButtonArmor');
btnFightArmor.addEventListener('click', fightArmor);



