// characters/builds/Summoner.ts

import { BaseBuild } from "./BaseBuild";

export class Summoner extends BaseBuild {
  constructor() {
    super({
      name: "Summoner",
      staminaModifier: 50
    });
  }

  registerPassives(character) {

    character.onSummon = (entity) => {
      entity.hp *= 1.2;
      entity.damage *= 1.1;
    };

    // ลด cooldown summon 20%
    character.summonCooldownReduction = 0.2;
  }
}
