import { Scene } from "@/core";
import type { GameScreen, Controls } from "@/core";
import { TextBox } from "@/objects/ui";

class Lib extends Scene {
  private _assets:  {name: string, path: string}[] = [];
  private _total: number;
  private _loaded: number;
  private _loadedAt: number;
  private _status: string;

  constructor(screen: GameScreen) {
    super(screen);

    this._assets = [
      {name: "test", path: "/assets/imgs/test.jpg"},
      {name: "tree", path: "/assets/imgs/tree.jpg"},
      {name: "skeleton", path: "/assets/sprites/skeleton.png"},
    ];

    this._total = this._assets.length;
    this._loaded = 0;
    this._loadedAt = 0;
    this._status = "loading";

    for (let i = 0; this._total > i; i++) {
      let img = new Image();
      img.onload = () => this._loaded++;
      img.src = this._assets[i].path;
      screen.imgs[this._assets[i].name] = img;
    }
  }

  public render(time: number): string | undefined {
    if (this._status === "loading") {
      if (this._loaded === this._total) {
        this._status = "loaded";
        this._loadedAt = performance.now();
      }
      
      this.loadingScreen();
      return "lib";
    }

    if (this._status === "loaded") {
      if ((time - this._loadedAt) > 1000) {
        return "hello-world"
      } else {
        return "lib"
      }
    }
  }

  private loadingScreen() {
    this.clearScene();
    const loadingText = new TextBox(this._ctx, this._canvas, {
      x: 500, y: 100,
      label: `Loading ${this._loaded}/${this._total}`,
      labelColor: "red",
      fontFamily: "Arial",
      fontSize: "70px",
      align: "center",
      baseline: "center"
    });
  }
}

export default Lib;