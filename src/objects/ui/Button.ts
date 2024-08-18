import type { Controls } from "@/core";
import type { Radius, Padding } from "@/types/ui";
import { setRadius, setPadding } from "@/types/declarations";

class Button {
  private _controls: Controls;
  private _ctx: CanvasRenderingContext2D;
  public x: number;
  public y: number;
  public width: number | "auto";
  public height: number | "auto";
  private _childeWidth: number = 0;
  private _childeHeight: number = 0;
  public padding: Padding;
  public radius: Radius;
  public label: string;
  public color: string | "transparent";
  public border: number = 0;
  public borderColor: string | "transparent";
  private _textMetrics: TextMetrics;

  constructor(ctx: CanvasRenderingContext2D, controls: Controls, params: {
    x: number, 
    y: number, 
    width: number | "auto", 
    height: number | "auto", 
    padding?: string;
    radius?: number, 
    color: string, 
    border?: number, 
    borderColor?: string,
  }) {
    const { x, y, width, height, padding, radius, color, border, borderColor } = params;
    this._ctx = ctx;
    this._controls = controls;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.padding = setPadding(padding);
    this.radius = setRadius(radius);
    this.color = color;
    this.border = border;
    this.borderColor = borderColor;

    this._ctx.reset()
  }

  ////////
  /////
  // не работает нормально клик на кнопку, метод вызывается несколько раз, нужно исправить
  /////
  ////////
  public click(callback: Callback) {
    const width = (this.width !== "auto") ? this.width : this._childeWidth;
    const height = (this.height !== "auto") ? this.height : this._childeHeight;
    this._controls.addButton({
      x: this.x,
      y: this.y,
      width: width,
      height: height,
      callback: callback,
    });
  }

  private drawRadius(width: number, height: number) {
    this._ctx.beginPath();  
    // левый верхний угол
    this._ctx.moveTo(this.x + this.radius, this.y);
    // верхняя сторона
    this._ctx.lineTo(this.x + width - this.radius, this.y);
    // правый верхний угол
    this._ctx.arcTo(this.x + width, this.y, this.x + width, this.y + this.radius, this.radius);
    // правая сторона
    this._ctx.lineTo(this.x + width, this.y + height - this.radius);
    // правый нижний угол
    this._ctx.arcTo(this.x + width, this.y + height, this.x + width - this.radius, this.y + height, this.radius);
    // нижняя сторона
    this._ctx.lineTo(this.x + this.radius, this.y + height);
    // левый нижний угол
    this._ctx.arcTo(this.x, this.y + height, this.x, this.y + height - this.radius, this.radius);
    // левая сторона
    this._ctx.lineTo(this.x, this.y + this.radius);
    // левый верхний угол
    this._ctx.arcTo(this.x, this.y, this.x + this.radius, this.y, this.radius);
    this._ctx.closePath();
  }

  private renderButton(width: number, height: number) {
    this._ctx.fillStyle = this.color;
    this.drawRadius(width, height);
    if (this.color !== "transparent") {
      this._ctx.fill();
    }

    this._ctx.strokeStyle = this.borderColor;
    if (this.border > 0 && this.borderColor !== "transparent") {
      this._ctx.lineWidth = this.border;
      this._ctx.stroke()
    }
  }

  public text(params: {
    label: string, labelColor?: string, fontFamily: string, fontSize: string, markdown?: string
  }) {
    const { label, labelColor, fontFamily, fontSize, markdown } = params;

    this._ctx.font = `${fontSize} ${fontFamily}`;
    this._textMetrics = this._ctx.measureText(label);

    this._childeWidth = this._textMetrics.width;
    this._childeHeight = this._textMetrics.actualBoundingBoxAscent + this._textMetrics.actualBoundingBoxDescent;

    // если ширина "авто", то шириной кнопки становится ширина текста, который находится в ней + учет внутренних отступов
    this.width = ((this.width !== "auto") ? this.width : this._childeWidth) + Number(this.padding?.split(" ")[1]) * 2;
    this.height = ((this.height !== "auto") ? this.height : this._childeHeight) +  + Number(this.padding?.split(" ")[0]) * 2;
    
    const textX = this.x + this.width / 2 - this._childeWidth / 2;
    // отступ, чтобы текст был по центру относительно y
    const offset = (this.height === this._childeHeight) ? 0 : this._childeHeight / 10;
    const textY = this.y + this.height / 2 + this._childeHeight / 2 - offset;

    this.renderButton(this.width, this.height);
    this._ctx.fillStyle = labelColor;
    this._ctx.lineWidth = 0;
    this._ctx.fillText(label, textX, textY);
  }

  public image(label: HTMLImageElement) {

  }
}

export default Button;