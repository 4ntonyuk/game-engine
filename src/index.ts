import { Core, Controls, GameScreen } from "./core";
import { HelloWorld } from "./scenes";

const canvas = document.createElement("canvas");
canvas.id = "root";
document.body.appendChild(canvas);

const screen = new GameScreen(canvas, window.innerWidth, window.innerHeight);
const controls = new Controls;

const core = new Core;
core.scenes = {
  "hello-world": new HelloWorld(screen, controls),
};
core.currentScene = "hello-world";
core.start();