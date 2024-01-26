const {startGame, getDiceRoll, handleGame, Player } = require("./../src/arena_game");

test("player should roll the die between 1 to 6, both inclusive", () => {
    const diceResult = getDiceRoll()
    expect(diceResult).toBeGreaterThanOrEqual(1);
    expect(diceResult).toBeLessThanOrEqual(6);
})

test("player shouldn't have negative health, strength, attack", () => {
    const playerA = new Player(0, 50, 5, 10);
    expect(playerA.health).toBeGreaterThanOrEqual(0);
    expect(playerA.strength).toBeGreaterThanOrEqual(0);
    expect(playerA.attack).toBeGreaterThanOrEqual(0);
});