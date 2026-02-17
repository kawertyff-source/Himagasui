// characters/builds/Speedster.ts

import { BaseBuild } from "./BaseBuild";

export class Speedster extends BaseBuild {
  constructor() {
    super({
      name: "Speedster",
      staminaModifier: 40,
      attackModifier: 5
    });
  }

  registerPassives(character) {

    // Dash Cancel 3 เฟรม
    character.dashCancelWindow = 3;

    // Perfect Evade ให้ได้ Speed Buff
    character.onPerfectEvade = () => {
      character.speedMultiplier = 1.5;
      setTimeout(() => {
        character.speedMultiplier = 1;
      }, 2000);
    };
  }
}
