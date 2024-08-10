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
      width: "auto", height: "auto", 
      padding: "20 25",
      color: "#1d1d1d", 
      border: 0, borderColor: "#e1e1e1",
      radius: 5
    });
    button.text({
      label: "Hello world!",
      labelColor: "#e1e1e1",
      fontFamily: "Arial",
      fontSize: "20px"
    });
    button.click(() => {
      console.log("Hello-world start!")
    })

    return "hello-world"
  }
}

export default HelloWorld;