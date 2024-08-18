class TextBox {
  private _ctx: CanvasRenderingContext2D;
  private _canvas: HTMLCanvasElement;
  private _textMetrics: TextMetrics;
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public label: string;
  public labelColor: string = "#000";
  public fontFamily: string;
  public fontSize: string;
  public align: "center";
  public baseline: "center";

  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, params: {
    x: number,
    y: number,
    label: string,
    labelColor?: string,
    fontFamily: string,
    fontSize: string,
    align?: "center",
    baseline?: "center",
  }) {
    const { x, y, label, labelColor, fontFamily, fontSize, align, baseline } = params;

    this._ctx = ctx;
    this._canvas = canvas;
    this.x = x;
    this.y = y;
    this.label = label;
    this.labelColor = labelColor;
    this.fontFamily = fontFamily;
    this.fontSize = fontSize;
    this.align = align;
    this.baseline = baseline;

    this._ctx.reset()
    this._ctx.fillStyle = labelColor;
    this._ctx.lineWidth = 0;
    this._ctx.font = `${fontSize} ${fontFamily}`;
    
    this._textMetrics = this._ctx.measureText(this.label);
    this.width = this._textMetrics.width;
    this.height = this._textMetrics.actualBoundingBoxAscent + this._textMetrics.actualBoundingBoxDescent;
    
    this.x = (this.align === "center") ? this._canvas.width / 2 - this.width / 2 : this.x;
    this.y = (this.baseline === "center") ? this._canvas.height / 2 - this.height / 10: this.y;

    this._ctx.fillText(this.label, this.x, this.y);
  }
}

export default TextBox;