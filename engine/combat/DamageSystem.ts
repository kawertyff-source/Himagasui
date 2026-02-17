export class DamageSystem {
  static apply(attacker, target, damage: number) {
    const finalDamage = Math.max(damage - target.defense, 1);
    target.hp -= finalDamage;
  }
}
