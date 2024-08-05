class GameScreen {
  private _canvas: HTMLCanvasElement;
  private _w: number;
  private _h: number;
  public imgs: {[name: string]: HTMLImageElement};

  constructor(canvas: HTMLCanvasElement, w: number, h: number, imgs: {} = {}) {
    this._canvas = canvas;
    this._w = w;
    this._h = h;
    this._canvas.width = this._w;
    this._canvas.height = this._h;
    this.imgs = imgs;
  }

  public get canvas() {
    return this._canvas;
  }

  public get width() {
    return this._w
  }

  public get height() {
    return this._h;
  }
}

export default GameScreen;