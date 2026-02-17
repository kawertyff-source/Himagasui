// characters/builds/Toxic.ts

import { BaseBuild } from "./BaseBuild";

export class Toxic extends BaseBuild {
  constructor() {
    super({
      name: "Toxic",
      hpModifier: 30,
      attackModifier: 10
    });
  }

  registerPassives(character) {

    character.onHit = (target) => {
      target.poisonStack = (target.poisonStack || 0) + 1;

      if (target.poisonStack >= 5) {
        target.hp -= 20; // burst poison
        target.poisonStack = 0;
      }
    };
  }
}
