import type { GameScreen, Controls } from "./";

class Scene {
  private _canvas: HTMLCanvasElement;
  protected _ctx: CanvasRenderingContext2D | null;
  protected _controls: Controls;
  protected _imgs: Object

  constructor(screen: GameScreen, controls: Controls) {
    this._canvas = screen.canvas;
    this._ctx = this._canvas.getContext("2d");
    this._controls = controls;
    this._imgs = screen.imgs;
  }
}

export default Scene;