import type { GameScreen, Controls } from "./";

class Scene {
  protected _canvas: HTMLCanvasElement;
  protected _ctx: CanvasRenderingContext2D | null;
  protected _controls: Controls;
  protected _imgs: {[name: string]: HTMLImageElement};
  private _scaleX: number;
  private _scaleY: number;

  constructor(screen: GameScreen, controls: Controls) {
    this._canvas = screen.canvas;
    this._ctx = this._canvas.getContext("2d");
    this._imgs = screen.imgs;
    this._controls = controls;
    this._scaleX = this._canvas.width / screen.width;
    this._scaleY = this._canvas.height / screen.height;
    
    this.resizeCanvas;
    window.addEventListener("resize", this.resizeCanvas);
  }

  private resizeCanvas() {
    this._ctx?.scale(this._scaleX, this._scaleY);
  }
}

export default Scene;