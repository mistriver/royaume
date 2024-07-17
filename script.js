// Création de la classe Character
class Character {
  constructor(name, pv, power) {
    this.name = name;
    this.pv = pv;
    this.power = power;
  }
}

// Création des characters
let chevalier = new Character("chevalier", 100, 10);
let mage = new Character("mage", 100, 10);