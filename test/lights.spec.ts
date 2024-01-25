import {CommandEnum, Lights} from "../src/lights";

describe('Lights', () => {
  let lights: Lights;

  beforeEach(() => {
    lights = new Lights();
  });

  it('should create lights class', () => {
    expect(lights).toBeTruthy()
  });

  it('should have an array with 1000 false default values', () => {
    expect(lights.lightsArr[0][0]).toEqual(false);
    expect(lights.lightsArr[999][999]).toEqual(false);
    expect(lights.lightsArr[0][999]).toEqual(false);
    expect(lights.lightsArr[999][0]).toEqual(false);
    expect(lights.lightsArr.length).toEqual(1000);
  });

  it('should turn on a single light', () => {
    lights.turnOn(0, 0);
    expect(lights.lightsArr[0][0]).toEqual(true);
    lights.turnOn(999, 999);
    expect(lights.lightsArr[999][999]).toEqual(true);
    lights.turnOn(0, 999);
  });

  it('should turn off a single light', () => {
    lights.turnOff(0, 0);
    expect(lights.lightsArr[0][0]).toEqual(false);
    lights.turnOff(999, 999);
    expect(lights.lightsArr[999][999]).toEqual(false);
  });

  it('should toggle a single light', () => {
    lights.toggle(0, 0);
    expect(lights.lightsArr[0][0]).toEqual(true);
    lights.toggle(999, 999);
    expect(lights.lightsArr[999][999]).toEqual(true);
  });

  it('should turn on [887,9] through [959,629]', () => {
    lights.through(887, 9, 959, 629, CommandEnum.On);
    expect(lights.lightsArr[887][9]).toEqual(true);
    expect(lights.lightsArr[959][629]).toEqual(true);
    expect(lights.lightsArr[900][500]).toEqual(true);
  });

  it('should turn on [454,398] through [844,448]', () => {
    lights.through(454, 398, 844, 448, CommandEnum.On);
    expect(lights.lightsArr[454][398]).toEqual(true);
    expect(lights.lightsArr[844][448]).toEqual(true);
    expect(lights.lightsArr[500][400]).toEqual(true);
  });

  it('should turn off [539,243] through [559,965]', () => {
    lights.through(539, 243, 559, 965, CommandEnum.Off);
    expect(lights.lightsArr[539][243]).toEqual(false);
    expect(lights.lightsArr[559][965]).toEqual(false);
    expect(lights.lightsArr[550][500]).toEqual(false);
  });

  it('should toggle [615,238] through [750,714]', () => {
    lights.through(615, 238, 750, 714, CommandEnum.Toggle);
    expect(lights.lightsArr[615][238]).toEqual(true);
    expect(lights.lightsArr[750][714]).toEqual(true);
    expect(lights.lightsArr[700][500]).toEqual(true);
  });

  it('should toggle [322,558] through [977,958] then turn off [539,243] through [559,965]', () => {
    lights.through(322, 558, 977, 958, CommandEnum.Toggle);
    expect(lights.lightsArr[322][558]).toEqual(true);
    expect(lights.lightsArr[977][958]).toEqual(true);
    lights.through(539, 243, 559, 965, CommandEnum.Off);
    expect(lights.lightsArr[350][243]).toEqual(false);
    expect(lights.lightsArr[559][965]).toEqual(false);
    expect(lights.lightsArr[700][500]).toEqual(false);
  });
});
