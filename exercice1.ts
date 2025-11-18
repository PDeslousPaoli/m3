class Creature {
  private energy: number = 100;

  constructor(public name: string, public species: string) {}

  move() {
    this.energy = Math.max(0, this.energy - 10);
  }

  rest() {
    this.energy = Math.min(100, this.energy + 20);
  }

  getEnergy() {
    return this.energy;
  }
}

const grenouille = new Creature("René", "grenouille");
grenouille.move();
console.log(grenouille.getEnergy()); 
