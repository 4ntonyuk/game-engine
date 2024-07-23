class GameScreen {
  private _canvas: HTMLCanvasElement;
  private _w: number;
  private _h: number;
  private _imgs: Object;

  constructor(canvas: HTMLCanvasElement, w: number, h: number, imgs: Object) {
    this._canvas = canvas;
    this._w = w;
    this._h = h;
    this._imgs = imgs;

    this._canvas.width = this._w;
    this._canvas.height = this._h;
  }

  public get canvas() {
    return this._canvas;
  }
  
  public get imgs() {
    return this._imgs;
  }

  public set imgs(value) {
    this._imgs = value;
  }
}

export default GameScreen;