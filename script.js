// Création de la classe Character
class Character {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
}

// Création des characters
let knight = new Character("chevalier", 5, 1);
let mage = new Character("mage", 5, 1);

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