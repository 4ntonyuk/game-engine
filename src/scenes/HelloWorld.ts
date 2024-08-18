import { Scene } from "@/core";
import { Button } from "@/objects/ui";
import type { GameScreen, Controls } from "@/core";
import { once } from "@/data/lib/utils";

class HelloWorld extends Scene {
  private _buttons: { [name: string]: Button } = {};
  constructor(screen: GameScreen, controls: Controls) {
    super(screen, controls);

  }

  public render(time: number): string {
    this.clearScene();
    this._buttons["hwbutton"] = new Button(this._ctx, this._controls, {
      x: 100, y: 100, 
      width: "auto", height: "auto", 
      padding: "20 25",
      color: "transparent", 
      border: 0, borderColor: "#e1e1e1",
      radius: 5,
    });
    this._buttons["hwbutton"].text({
      label: "Hello world!",
      labelColor: "black",
      fontFamily: "Arial",
      fontSize: "70px"
    });
    this._buttons["hwbutton"].click(once(() => {
      console.log(123)
    }))
    return "hello-world"
  }
}

export default HelloWorld;