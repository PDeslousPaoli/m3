abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void;

  move() {
    console.log(`${this.name} bouge.`);
  }
}

class Frog extends Animal {
  makeSound() {
    console.log(`${this.name} : Croa croa 🐸`);
  }
}

class Fish extends Animal {
  makeSound() {
    console.log(`${this.name} : bloup bloup 🐟`);
  }
}

class Dragonfly extends Animal {
  makeSound() {
    console.log(`${this.name} : bzzzz libellule 🪰`);
  }
}

class Mosquito extends Animal {
  makeSound() {
    console.log(`${this.name} : bzz bzz (moustique) 🦟`);
  }

  bite() {
    console.log(`${this.name} pique quelqu'un !`);
  }
}

class Snail extends Animal {
  makeSound() {
    console.log(`${this.name} : ... silence d'escargot 🐌`);
  }

  move() {
    console.log(`${this.name} avance trèèès lentement...`);
  }
}

// Test polymorphisme
const animals: Animal[] = [
  new Frog("René"),
  new Fish("Nemo"),
  new Dragonfly("Flash"),
  new Mosquito("Piquou"),
  new Snail("Lentux")
];

animals.forEach(a => a.makeSound());
