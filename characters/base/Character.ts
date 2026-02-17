// characters/base/Character.ts

import { BaseBuild } from "../builds/BaseBuild";

export class Character {

  build?: BaseBuild;

  applyBuild(build: BaseBuild) {
    this.build = build;
    build.apply(this);
  }
}
