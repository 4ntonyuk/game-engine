import type { GameScreen, Controls } from "./";

class Scene {
  private _canvas: HTMLCanvasElement;
  private _ratio: number;
  protected _ctx: CanvasRenderingContext2D | null;
  protected _controls: Controls;
  protected _imgs: {}

  constructor(screen: GameScreen, controls: Controls) {
    this._canvas = screen.canvas;
    this._ratio = screen.ratio;
    this._ctx = this._canvas.getContext("2d");
    this._imgs = screen.imgs;
    this._controls = controls;

    window.addEventListener("resize", this.resizeCanvas);
  }

  private resizeCanvas():void {
    if (window.innerWidth / window.innerHeight > this._ratio) {
      this._canvas.height = window.innerHeight;
      this._canvas.width = window.innerHeight * this._ratio;
    } else {
      this._canvas.width = window.innerWidth;
      this._canvas.height = window.innerWidth / this._ratio;
    }
  }
}

export default Scene;