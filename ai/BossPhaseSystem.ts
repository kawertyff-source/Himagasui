export class BossPhaseSystem {
  update(boss) {
    if (boss.hp < 70) boss.phase = 2;
    if (boss.hp < 30) boss.phase = 3;
  }
}
