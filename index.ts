import { GameLoop } from "./core/GameLoop";
import { CombatEngine } from "./engine/combat/CombatEngine";

const engine = new CombatEngine();
const loop = new GameLoop();

loop.start(() => {
  engine.update();
});
