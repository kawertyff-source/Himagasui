export class ComboSystem {
  private comboCount = 0;

  registerHit() {
    this.comboCount++;
  }

  reset() {
    this.comboCount = 0;
  }

  get() {
    return this.comboCount;
  }
}
