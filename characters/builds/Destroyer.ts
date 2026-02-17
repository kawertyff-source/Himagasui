// characters/builds/Destroyer.ts

import { BaseBuild } from "./BaseBuild";

export class Destroyer extends BaseBuild {
  constructor() {
    super({
      name: "Destroyer",
      hpModifier: 50,
      attackModifier: 25,
      defenseModifier: -5
    });
  }

  registerPassives(character) {

    // Passive: ทุก 3 hit เพิ่ม damage 10%
    character.onCombo = (count) => {
      if (count >= 3) {
        character.tempDamageBoost = 0.1;
      }
    };

    // Passive: Guard Break bonus
    character.guardBreakBonus = 0.2;
  }
}
