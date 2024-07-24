import { Scene, GameScreen } from "../core";
import type { Controls } from "../core";

class HelloWorld extends Scene {
  private _scaleX: number;
  private _scaleY: number;

  constructor(screen: GameScreen, controls: Controls) {
    super(screen, controls);
    this._scaleX = screen.scaleX;
    this._scaleY = screen.scaleY;
  }

  public render(time: number): string {
    this._ctx?.rect(this._scaleX *  30, this._scaleY * 30, 100, 100);
    this._ctx?.fill()
    console.log(1)
    return "hello-world"
  }
}

export default HelloWorld;