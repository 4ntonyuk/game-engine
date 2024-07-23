class HelloWorld {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public render(time: number): string {
    console.log(`hello world by ${this._name}`);

    return "hello-world"
  }
}

export default HelloWorld;