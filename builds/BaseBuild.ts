// characters/builds/BaseBuild.ts

import { Character } from "../base/Character";

export interface BuildConfig {
  name: string;
  hpModifier?: number;
  attackModifier?: number;
  defenseModifier?: number;
  staminaModifier?: number;
}

export abstract class BaseBuild {
  config: BuildConfig;

  constructor(config: BuildConfig) {
    this.config = config;
  }

  apply(character: Character) {
    character.hp += this.config.hpModifier || 0;
    character.attack += this.config.attackModifier || 0;
    character.defense += this.config.defenseModifier || 0;
    character.stamina += this.config.staminaModifier || 0;

    this.registerPassives(character);
  }

  abstract registerPassives(character: Character): void;
}
