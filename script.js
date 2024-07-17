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