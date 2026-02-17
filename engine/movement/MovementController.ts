export class MovementController {
  move(entity, direction, speed) {
    entity.x += direction.x * speed;
    entity.y += direction.y * speed;
  }
}
