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

// une fonction qui permet de lancer une game ie
//  - définir combien ça ramène d'or -> entre 0 et 3 aléatoirement 
// - afficher dans l'historique combien on a ramené 
//  - mettre à jour le compteur de ressources

let historique = document.querySelector("#historique");
let button = document.querySelector("#button-run");
function run(){
  // définir combien ça ramène d'or -> entre 0 et 3 aléatoirement
  result = Math.floor(Math.random() * 4);
  historique.insertAdjacentHTML("beforeend",`<li>Vous avez ramené ${result} d'or</li>`);
  resources.gold += result; 
  displayResources();
}

button.addEventListener("click", run);