// characters/builds/Controller.ts

import { BaseBuild } from "./BaseBuild";

export class Controller extends BaseBuild {
  constructor() {
    super({
      name: "Controller",
      defenseModifier: 20,
      staminaModifier: 20
    });
  }

  registerPassives(character) {

    // ลด projectile damage 30%
    character.projectileResistance = 0.3;

    // เพิ่ม block advantage +2 frame
    character.blockAdvantageBonus = 2;
  }
}
