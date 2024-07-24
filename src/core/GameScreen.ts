class GameScreen {
  private _canvas: HTMLCanvasElement;
  private _w: number;
  private _h: number;
  private _ratio: number;
  private _scaleX: number;
  private _scaleY: number;
  public imgs: {};

  constructor(canvas: HTMLCanvasElement, w: number, h: number, imgs: {} = {}) {
    this._canvas = canvas;
    this._w = w;
    this._h = h;
    this._ratio = this._w / this._h;
    this._canvas.width = this._w;
    this._canvas.height = this._h;
    this._scaleX = this._canvas.width / this._w;
    this._scaleY = this._canvas.height / this._h;
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

  public get ratio() {
    return this._ratio;
  }

  public get scaleX() {
    return this._scaleX;
  }

  public get scaleY() {
    return this._scaleY;
  }
}

export default GameScreen;