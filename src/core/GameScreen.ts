interface ScreenType {
  w: number;
  h: number;
  ctx: CanvasRenderingContext2D | null;
}

class GameScreen implements ScreenType {
  private w: number;
  private h: number;
  private ctx: CanvasRenderingContext2D | null;
  constructor(props: ScreenType) {

    this.w = 0;
    this.h = 0;
    this.ctx = null;
  }
}