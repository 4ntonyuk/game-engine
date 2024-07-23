import { Scene } from "../core";
import type { Controls, GameScreen } from "../core";

class HelloWorld extends Scene{

  constructor(screen: GameScreen, controls: Controls) {
    super(screen, controls);
  }

  public render(time: number): string {
    this._ctx?.rect(30, 30, 100, 100);
    this._ctx?.fill()

    return "hello-world"
  }
}

export default HelloWorld;