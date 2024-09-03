import { Scene } from "@/core";
import { Button, TextBox } from "@/objects/ui";
import type { GameScreen, Controls } from "@/core";
import { once } from "@/data/lib/utils";

class HelloWorld extends Scene {
  private _buttons: { [name: string]: Button } = {};
  constructor(screen: GameScreen, controls: Controls) {
    super(screen, controls);
  }
  
  public render(time: number): string {
    this.clearScene();

    const text = new TextBox(this._ctx, this._canvas, {
      x: 400, y: 300,
      label: "lalala", labelColor: "red",
      fontFamily: "Arial", fontSize: "20px",
      align: "center", baseline: "center",
    });

    const button = new Button(this._ctx, this._controls, {
      x: 100, y: 100, 
      width: "auto", height: "auto", 
      padding: "20 25",
      color: "#1d1d1d", 
      radius: 5,
    });
    button.text({
      label: "Hello world!",
      labelColor: "#e1e1e1",
      fontFamily: "Arial",
      fontSize: "70px"
    });
    button.click(once(() => {
      console.log("123");
    }));
    
    const button1 = new Button(this._ctx, this._controls, {
      x: 400, y: 400, 
      width: "auto", height: "auto", 
      padding: "20 25",
      color: "#1d1d1d", 
      radius: 5,
    });
    button1.image({
      img: this._imgs["tree"],
      width: 200,
      height: 300,
    });
    button1.click(once(() => {
      console.log("123");
    }));
  
    return "hello-world"
  }
}

export default HelloWorld;