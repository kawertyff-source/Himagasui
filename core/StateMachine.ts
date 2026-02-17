// core/StateMachine.ts
export interface State {
  enter(): void;
  update(): void;
  exit(): void;
}

export class StateMachine {
  private current?: State;

  change(state: State) {
    this.current?.exit();
    this.current = state;
    this.current.enter();
  }

  update() {
    this.current?.update();
  }
}
