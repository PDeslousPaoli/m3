interface Swimmer {
  swim(): void;
}

interface Flyer {
  fly(): void;
}

interface Predator {
  hunt(prey: Animal): void;
}

class Duck extends Animal implements Swimmer, Flyer {
  makeSound() {
    console.log(`${this.name}: coin coin 🦆`);
  }

  swim() {
    console.log(`${this.name} nage.`);
  }

  fly() {
    console.log(`${this.name} vole.`);
  }
}

class Pike extends Animal implements Swimmer, Predator {
  makeSound() {
    console.log(`${this.name}: gloup (brochet)`);
  }

  swim() {
    console.log(`${this.name} nage rapidement.`);
  }

  hunt(prey: Animal) {
    console.log(`${this.name} attaque ${prey.name} !`);
  }
}

function makeSwim(creature: Swimmer) {
  creature.swim();
}

// Test
const duck = new Duck("Donald");
const pike = new Pike("Bruce");

duck.swim();
duck.fly();
pike.hunt(duck);
