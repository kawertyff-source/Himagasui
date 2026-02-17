import { StateMachine } from "../../core/StateMachine";

export class Character {
  id: string;
  hp: number;
  stamina: number;
  defense: number;
  stateMachine = new StateMachine();

  constructor(id, stats) {
    this.id = id;
    this.hp = stats.hp;
    this.stamina = stats.stamina;
    this.defense = stats.defense;
  }
}
