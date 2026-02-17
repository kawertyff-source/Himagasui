// core/GameLoop.ts
import { Time } from "./Time";

export class GameLoop {
  start(update: () => void) {
    const loop = () => {
      Time.update();
      update();
      requestAnimationFrame(loop);
    };
    loop();
  }
}
