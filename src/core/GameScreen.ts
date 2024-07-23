class GameScreen {
  private _canvas: HTMLCanvasElement;
  private _w: number;
  private _h: number;
  public imgs: {};

  constructor(canvas: HTMLCanvasElement, w: number, h: number, imgs: {}) {
    this._canvas = canvas;
    this._w = w;
    this._h = h;
    this.imgs = imgs;

    this._canvas.width = this._w;
    this._canvas.height = this._h;
  }

  public get canvas() {
    return this._canvas;
  }
}

export default GameScreen;