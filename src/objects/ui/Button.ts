type ButtonType = {
  x: number,
  y: number,
  width: number,
  height: number,
  radius?: number,
  color: string,
  border?: number,
  borderColor?: string,
}

class Button {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public radius: number;
  public color: string;
  public border: number;
  public borderColor: string;

  constructor(params: ButtonType) {
    const { x, y, width, height, radius, color, border, borderColor } = params;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius | 0;
    this.color = color;
    this.border = border | 0;
    this.borderColor = borderColor;
  }
}

export default Button;