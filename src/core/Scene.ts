import type { GameScreen, Controls } from "@/core";

class Scene {
  protected _screen: GameScreen;
  protected _canvas: HTMLCanvasElement;
  protected _ctx: CanvasRenderingContext2D;
  protected _controls: Controls;
  protected _imgs: {[name: string]: HTMLImageElement};
  
  constructor(screen: GameScreen, controls?: Controls) {
    this._screen = screen;
    this._canvas = screen.canvas;
    this._ctx = this._canvas.getContext("2d");
    this._imgs = screen.imgs;
    this._controls = controls;
  }
}

export default Scene;