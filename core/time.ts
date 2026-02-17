export class Time {
  static FIXED_DELTA = 1 / 60;
  static frame = 0;

  static update() {
    this.frame++;
  }

  static getFrame() {
    return this.frame;
  }
}
