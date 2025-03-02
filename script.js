// Fonction sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Création de la classe Character
class Character {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
}

// Création de la classe Building
class Building {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

// Création des characters
let knight = new Character("chevalier", 5, 1);
let mage = new Character("mage", 5, 1);

// Création des buildings
let tower = new Building("tour", 0);
let castle = new Building("castle", 0);

// Fonction pour afficher les informations des characters
function displayCharacter(character, element) {
  let elementName = document.querySelector(`#${element} .character-name`);
  let elementHealth = document.querySelector(`#${element} .character-health`);
  let elementPower = document.querySelector(`#${element} .character-power`);
  console.log(elementName);
  elementName.textContent = character.name;
  elementHealth.textContent = character.health;
  elementPower.textContent = character.power;
}

displayCharacter(knight, "knight");
displayCharacter(mage, "mage");

// Fonction pour afficher les informations des buildings
function displayBuilding(building, element) {
  let elementName = document.querySelector(`#${element} .building-name`);
  let elementLevel = document.querySelector(`#${element} .building-level`);
  elementName.textContent = building.name;
  elementLevel.textContent = building.level;
}

displayBuilding(tower, "tower");
displayBuilding(castle, "castle");

// Stock des ressources
let resources = {
  gold: 0,
};

// Fonction pour afficher les ressources
function displayResources() {
  let elementGold = document.querySelector("#resources .gold");
  elementGold.textContent = resources.gold;
}

displayResources();

// fonction random
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fonction pour générer un wolf
function generateWolf() {
  let health = randomInt(1, 2);
  let power = randomInt(1, 2);
  return new Character("wolf", health, power);
}

// Fonction pour générer un spider 
function generateSpider() {
  let health = 1;
  let power = randomInt(0, 1);
  return new Character("spider", health, power);
}

// Fonction pour générer un orque
function generateOrque() {
  let health = 10;
  let power = randomInt(3, 8);
  return new Character("orque", health, power);
}


function generateMonster() {
  result = Math.random();
  if (result <= 0.7) {
    return generateWolf();
  } else if (result <= 0.9) {
    return generateSpider();
  } else {
    return generateOrque();
  }
}

// une fonction qui permet de lancer une game ie
//  - définir combien ça ramène d'or -> entre 0 et 3 aléatoirement 
// - afficher dans l'historique combien on a ramené 
//  - mettre à jour le compteur de ressources

let historique = document.querySelector("#historique");
let button = document.querySelector("#button-run");
async function run(){
  // désactiver le button pendant une run
  button.disabled = true;

  // Générer un certain nb de monstres pour les battre un par un 
  let monsters = [];
  for (let i = 0; i < 3; i++){
    monsters.push(generateMonster());
  }

  // COMBAT
  for (let monster of monsters){
    historique.insertAdjacentHTML("afterbegin",`<li>Vous avez combattu un ${monster.name}</li>`);
      // définir combien ça ramène d'or -> entre 0 et 3 aléatoirement
    result = Math.floor(Math.random() * 4);
    historique.insertAdjacentHTML("afterbegin",`<li>Vous avez ramené ${result} d'or</li>`);
    resources.gold += result; 
    displayResources();
    await sleep(1000);
  }

  // réactiver le button
  button.disabled = false;
}

button.addEventListener("click", run);