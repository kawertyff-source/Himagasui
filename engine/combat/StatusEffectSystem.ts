export class StatusEffectSystem {
  private effects = new Map<string, any[]>();

  apply(targetId: string, effect: any) {
    if (!this.effects.has(targetId)) {
      this.effects.set(targetId, []);
    }
    this.effects.get(targetId)!.push(effect);
  }

  update() {
    this.effects.forEach(list => {
      list.forEach(effect => effect.tick());
    });
  }
}
