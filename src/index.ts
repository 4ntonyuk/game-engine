import { Core, Controls, GameScreen } from "./core";
import { HelloWorld, Lib } from "./scenes";

const {
  ASD
} = process.env;

console.log(ASD)

const canvas = document.createElement("canvas");
canvas.id = "root";
document.body.appendChild(canvas);

const screen = new GameScreen(canvas, 1366, 768);
const controls = new Controls;

const core = new Core;
core.scenes = {
  "lib": new Lib(screen, controls),
  "hello-world": new HelloWorld(screen, controls),
};
core.currentScene = "lib";
core.start();