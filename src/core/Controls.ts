class Controls {
  private _codes: { [key: string]: string } = {};
  private _states: { [key: string]: boolean } = {};
  public mouseCoord: { x: number; y: number } = { x: 0, y: 0 };
  public methods: [
    {
      callback: Callback, 
      top: boolean,
      left: boolean,
      right: boolean,
      bottom: boolean,
    }
  ];
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
    this.methods.forEach((element) => {
      if (element.top && element.left && element.right && element.bottom) {
        element.callback();
      }
    });
    console.log(this.methods)
  }

  private mouseMoveHandler(e: MouseEvent): void {
    this.mouseCoord.x = e.clientX;
    this.mouseCoord.y = e.clientY;

    // console.log(this._mouseCoord);
  }
}

export default Controls;
