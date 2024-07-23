import { Core, Loop } from "./core";
import { HelloWorld } from "./scenes";

const core = new Core();
const loop = new Loop;

core.scenes = {
  "hello-world": new HelloWorld("dmitry")
};
core.currentScene = "hello-world";

core.start()
// loop.start(function frame(time: number) {
//   core.currentScene = core.scenes[core.currentScene].render(time);
// })