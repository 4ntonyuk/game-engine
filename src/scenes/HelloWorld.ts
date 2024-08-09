import { Scene } from "@/core";
import { Button } from "@/objects/ui";
import type { GameScreen, Controls } from "@/core";

class HelloWorld extends Scene {
  constructor(screen: GameScreen, controls: Controls) {
    super(screen, controls);
  }

  public render(time: number): string {
    const button = new Button(this._screen, {
      x: 100, y: 100, 
      width: 170, height: 100, 
      // padding: "10 20",
      color: "purple", 
      border: 5, borderColor: "#e1e1e1",
      // radius: 10
    });
    button.text({
      label: "Hello world!",
      labelColor: "#e1e1e1",
      fontFamily: "Arial",
      fontSize: "20px"
    });

    return "hello-world"
  }
}

export default HelloWorld;