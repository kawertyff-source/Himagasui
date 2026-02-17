type Callback = (...args: any[]) => void;

export class EventBus {
  private static events = new Map<string, Callback[]>();

  static on(event: string, cb: Callback) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event)!.push(cb);
  }

  static emit(event: string, ...args: any[]) {
    this.events.get(event)?.forEach(cb => cb(...args));
  }

  static clear() {
    this.events.clear();
  }
}
