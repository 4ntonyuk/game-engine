import { Scene } from "@/core";
import type { GameScreen } from "@/core";

type Radius = number & {__limited: "LIMITED"};
// type Padding = string;

class Button extends Scene {
  public x: number;
  public y: number;
  public width: number | "auto";
  public height: number | "auto";
  // public padding: Padding;
  public radius: number;
  public label: string;
  public color: string;
  public border: number;
  public borderColor: string;
  private _textMetrics: TextMetrics;

  constructor(screen: GameScreen, params: {
    x: number, 
    y: number, 
    width: number | "auto", 
    height: number | "auto", 
    // padding?: Padding;
    radius?: number, 
    color: string, 
    border?: number, 
    borderColor?: string,
  }) {
    super(screen);
    const { x, y, width, height, radius, color, border, borderColor } = params;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // this.padding = this.setPadding(padding);
    this.radius = this.setRadius(radius) | 0;
    this.color = color;
    this.border = border | 0;
    this.borderColor = borderColor;
  }

  // private setPadding(value: string): Padding {
  //   if (value === undefined) return;
  //   const paddingArray = value.split(" ");
  //   // if (typeof paddingArray[0] || typeof paddingArray)
  //   if (paddingArray.length !== 2) {
  //     throw new Error(`"Padding" must accept 2 parameters`);
  //   }
  //   return value as Padding;
  // }

  private setRadius(value: number): Radius {
    const max = 35;
    if (value > max) {
      throw new Error(`Radius cannot be greater than ${max}`);
    }
    return value as Radius;
  }

  private drawRadius(width: number, height: number) {
    this._ctx.fillStyle = this.color;
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
    // const paddingArray = this.padding.split(" ");

    this.drawRadius(width, height);
    this._ctx.fill();

    if (this.border > 0) {
      this._ctx.lineWidth = this.border;
      this._ctx.strokeStyle = this.borderColor;
      this._ctx.stroke()
    }

    this._ctx.restore();
  }

  public text(params: {
    label: string, labelColor?: string, fontFamily: string, fontSize: string, markdown?: string
  }) {
    const { label, labelColor, fontFamily, fontSize, markdown } = params;
    
    this._ctx.font = `${fontSize} ${fontFamily}`;
    this._textMetrics = this._ctx.measureText(label);

    const textWidth = this._textMetrics.width;
    const textHeight = this._textMetrics.actualBoundingBoxAscent + this._textMetrics.actualBoundingBoxDescent;

    // если ширина "авто", то шириной кнопки становится ширина текста, который находится в ней + учет внутренних отступов
    // this.width = ((this.width !== "auto") ? this.width : textWidth) + Number(this.padding?.split(" ")[1]) * 2;
    // this.height = ((this.height !== "auto") ? this.height : textHeight) +  + Number(this.padding?.split(" ")[0]) * 2;
    this.width = ((this.width !== "auto") ? this.width : textWidth)
    this.height = ((this.height !== "auto") ? this.height : textHeight)
    const textX = this.x + this.width / 2 - textWidth / 2;
    const offset = (this.height === textHeight) ? 0 : textHeight / 9;
    const textY = this.y + this.height / 2 + textHeight / 2 - offset;

    
    this.renderButton(this.width, this.height);
    this._ctx.fillStyle = labelColor;
    this._ctx.lineWidth = 0;
    this._ctx.fillText(label, textX, textY);
  }

  public image(label: HTMLImageElement) {

  }
}

export default Button;