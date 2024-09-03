import { Scene } from "@/core";
import type { GameScreen, Controls } from "@/core";
import { Button, TextBox } from "@/objects/ui";

class Menu extends Scene {
  constructor(screen: GameScreen, constrols: Controls) {
    super(screen, constrols);

    this.clickHandler.bind(this);
  }

  private clickHandler() {
    return "hello-world";
  }

  public render() {
    this.clearScene();

    const text = new TextBox(this._ctx, this._canvas, {
      x: 0, y: 100,
      label: "Menu", labelColor: "#1d1d1d",
      fontFamily: "Arial", fontSize: "90px",
      align: "center"
    });

    const button = new Button(this._ctx, this._controls, {
      x: 400, y: 500,
      width: "auto", height: "auto",
      padding: "25 35",
      color: "red"
    })
    button.text({
      label: "Start", labelColor: "white",
      fontFamily: "Arial", fontSize: "30px"
    })
    button.click(this.clickHandler);

    return "menu";
  }
}

export default Menu;