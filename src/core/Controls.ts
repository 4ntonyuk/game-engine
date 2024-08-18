class Controls {
  private _canvas: HTMLCanvasElement;
  private _codes: { [key: string]: string } = {
    "KeyA": "left",   
    "KeyD": "right", 
    "KeyW": "forward", 
    "KeyS": "backward",
    "Space": "jump",   
  };
  private _states: { [key: string]: boolean } = {
    "left": false,
    "right": false,
    "forward": false,
    "backward": false,
    "jump": false,
  };
  private _buttons: { 
    x: number, 
    y: number, 
    width: number,
    height: number,
    callback: Callback 
  }[] = [];
  private _mouseCoord: { x: number; y: number } = { 
    x: 0, y: 0 
  };
  public sounds: {};

  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;

    document.addEventListener("keydown", this.keyHandler.bind(this, true));
    document.addEventListener("keyup", this.keyHandler.bind(this, false));
    document.addEventListener("mouseup", this.clickHandler.bind(this));
    document.addEventListener("mousemove", this.updateMouseCoords.bind(this));
    document.addEventListener("resize", this.updateMouseCoords.bind(this));
    
    this.updateMouseCoords;
  }

  public addButton(button: {
    x: number,
    y: number,
    width: number,
    height: number,
    callback: Callback
  }) {
    this._buttons.push(button);
  }

  private keyHandler(value: boolean, e: KeyboardEvent): void {
    const state = this._codes[e.code];
    if (typeof state === "undefined") return;

    this._states[state] = value;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
    console.log(this._states[state])
  }

  private clickHandler(e: MouseEvent): void {
    console.log(`Mouse clicked at: (${this._mouseCoord.x}, ${this._mouseCoord.y})`);
    const { x, y } = this._mouseCoord;
    
    this._buttons.forEach(button => {
      const top = button.y <= y;
      const left = button.x <= x;
      const right = button.x + button.width >= x;
      const bottom = button.y + button.height >= y;

      if (top && left && right && bottom) {
        button.callback();
      }
    });
  }

  private updateMouseCoords(e: MouseEvent): void {
    const rect = this._canvas.getBoundingClientRect();
    this._mouseCoord.x = e.clientX - rect.left;
    this._mouseCoord.y = e.clientY - rect.top;
  }

}

export default Controls;