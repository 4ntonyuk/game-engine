import "~/public/globals.css";

import { Core, Controls, GameScreen } from "@/core";
import { HelloWorld, Lib, Menu } from "@/scenes";

const canvas = document.createElement("canvas");
canvas.id = "root";
document.body.appendChild(canvas);

const screen = new GameScreen(canvas, 1536, 864);
const controls = new Controls(canvas);

const core = new Core;
core.scenes = {
  "lib": new Lib(screen),
  "menu": new Menu(screen, controls),
  "hello-world": new HelloWorld(screen, controls),
};
core.currentScene = "lib";
core.start();

