// characters/builds/Forbidden.ts

import { BaseBuild } from "./BaseBuild";

export class Forbidden extends BaseBuild {
  constructor() {
    super({
      name: "Forbidden",
      hpModifier: 100,
      attackModifier: 30,
      defenseModifier: 30
    });
  }

  registerPassives(character) {

    // Perfect Timing System
    character.blackFlashCounter = 0;

    character.onPerfectHit = () => {
      character.blackFlashCounter++;

      if (character.blackFlashCounter >= 4) {
        character.attack *= 2;
      }
    };

    // Domain duration +3 sec
    character.domainBonusDuration = 3;
  }
}
