export class StaminaSystem {
  consume(entity, amount) {
    entity.stamina -= amount;
  }

  regen(entity) {
    entity.stamina += 0.5;
  }
}
