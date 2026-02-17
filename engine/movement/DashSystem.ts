export class DashSystem {
  dash(entity) {
    entity.x += entity.facing * 8;
  }
}
