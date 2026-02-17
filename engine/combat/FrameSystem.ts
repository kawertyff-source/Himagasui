export class FrameSystem {
  private frameData = new Map<string, number>();

  set(entityId: string, frame: number) {
    this.frameData.set(entityId, frame);
  }

  get(entityId: string) {
    return this.frameData.get(entityId) || 0;
  }
}
