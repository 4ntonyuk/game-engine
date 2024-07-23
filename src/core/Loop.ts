class Loop {
  private _lastTime: number;
  private _callback: (time: number) => void;
  private _animationFrame: (time: number) => void;

  constructor() {
    this._lastTime = 0;
    this._callback = () => {};
    this._animationFrame = this.frame.bind(this);
  }

  public start(callback: (time: number) => void) {
    this._callback = callback;
    requestAnimationFrame(this._animationFrame);
  }

  private frame(time: number) {
    if (time - this._lastTime > 30) {
      this._lastTime = time;
      this._callback(time);
    }
    requestAnimationFrame(this._animationFrame);
  }
}

export default Loop;