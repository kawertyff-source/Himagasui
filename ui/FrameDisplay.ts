import { Time } from "../core/Time";

export class FrameDisplay {
  render() {
    console.log("Frame:", Time.getFrame());
  }
}
