'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  die() {
    const index = Animal.alive.findIndex((a) => a === this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }

  changeHealth(amount) {
    this.health += amount;

    if (this.health <= 0) {
      this.health = 0; // Garantir que a saúde não seja negativa
      this.die();
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false; // O herbívoro começa visível
  }

  hide() {
    this.hidden = !this.hidden; // Alterna o estado de 'escondido'
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.changeHealth(-50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
