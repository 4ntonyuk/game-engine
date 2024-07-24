class Controls {
  private _codes: { [key: string]: string } = {};
  private _states: { [key: string]: boolean } = {};
  private _mouseCoord: { x: number; y: number } = { x: 0, y: 0 };
  public sounds: {};

  constructor() {
    this._codes = {
      "KeyA": "left",   
      "KeyD": "right", 
      "KeyW": "forward", 
      "KeyS": "backward",
      "Space": "jump",   
    };
    this._states = {
      "left": false,
      "right": false,
      "forward": false,
      "backward": false,
      "jump": false,
    };
    this.sounds = {};

    document.addEventListener("keydown", this.keyHandler.bind(this, true));
    document.addEventListener("keyup", this.keyHandler.bind(this, false));
    document.addEventListener("mouseup", this.clickHandler.bind(this));
    document.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
  }

  private keyHandler(value: boolean, e: KeyboardEvent): void {
    const state = this._codes[e.code];
    if (typeof state === "undefined") return;

    this._states[state] = value;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  }

  private clickHandler(e: MouseEvent): void {
    // ляляля мышкой нажал ыыыы
  }

  private mouseMoveHandler(e: MouseEvent): void {
    this._mouseCoord.x = e.clientX;
    this._mouseCoord.y = e.clientY;

    console.log(this._mouseCoord);
  }
}

export default Controls;
