export enum CommandEnum {
  On,
  Off,
  Toggle,
}

export class Lights {
  lightsArr: boolean[][] = Array(1000).fill(Array(1000).fill(false));
  constructor() {}

  turnOn(x: number, y: number) {
    this.lightsArr[x][y] = true;
  }

  turnOff(x: number, y: number) {
    this.lightsArr[x][y] = false;
  }

  toggle(x: number, y: number) {
    this.lightsArr[x][y] = !this.lightsArr[x][y];
  }

  through(x1: number, y1: number, x2: number, y2: number, command: CommandEnum) {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (command === CommandEnum.On) {
          this.turnOn(i, j);
        } else {
          this.turnOff(i, j);
        }

        if(command === CommandEnum.Toggle) {
          this.toggle(i, j);
        }
      }
    }
  }
}
