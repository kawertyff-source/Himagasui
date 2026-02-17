export class GuardSystem {
  static block(target, damage: number) {
    const reduced = damage * 0.5;
    target.guard -= reduced;
    return reduced;
  }
}
