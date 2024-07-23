class Sound {
  private sound: HTMLAudioElement;

  constructor(src: string, volume: number) {
    this.sound = document.createElement("audio");
    this.sound.volume = volume;
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound); 
  }

  public play(): void {
    this.sound.play();
  }

  public repeat(): void {
    this.sound.play();

    this.sound.addEventListener("ended", () => {
      this.sound.play();
    })
  }

  public stop(): void {
    this.sound.pause();
  }
}

export default Sound;