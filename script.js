// DOM elements
let characterNames = document.querySelectorAll(".character-name");
let characterHealths = document.querySelectorAll(".character-health");
let characterPowers = document.querySelectorAll(".character-power");

// Création de la classe Character
class Character {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
}

// Création des characters
let chevalier = new Character("chevalier", 5, 1);
let mage = new Character("mage", 5, 1);

// Fonction pour afficher les informations des characters
function displayCharacter(character, nameElement, healthElement, powerElement) {
  nameElement.textContent = character.name;
  healthElement.textContent = character.health;
  powerElement.textContent = character.power;
}

displayCharacter(chevalier, characterNames[0], characterHealths[0], characterPowers[0]);
displayCharacter(mage, characterNames[1], characterHealths[1], characterPowers[1]);