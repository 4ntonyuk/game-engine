import { Screen } from "../../types/gameEngine"

class Scene {
  private canvas: HTMLElement | null;

  constructor() {
    this.canvas = document.querySelector("div");
  }
}

export default Scene;