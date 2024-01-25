import { Game } from '../src/game';

describe('Game', () => {
    let game: Game;

    beforeEach(() => {
      game = new Game();
    });

    it('should be created a game', () => {
      expect(game).toBeTruthy();
    });
});
