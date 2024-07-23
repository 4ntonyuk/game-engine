import { Loop } from "./";

class Core {
  public scenes: any;
  public currentScene: string;
  private _loop: Loop;

  constructor() {
    this.scenes = {};
    this.currentScene = ""; 
    this._loop = new Loop;
  }
  
  public start(): void {
    this._loop.start((time: number) => {
      this.currentScene = this.scenes[this.currentScene].render(time);
    });
  }
}

export default Core;