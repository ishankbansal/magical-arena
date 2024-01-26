class Player {
  constructor(id, health, strength, attack) {
    this.id = id;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }
}

// initialisation of players
const playerA = new Player(0, 50, 5, 10);
const playerB = new Player(1, 100, 10, 5);

console.log(
  `Player A: \nHealth: ${playerA.health}\nStrength: ${playerA.strength}\nAttack: ${playerA.attack}\n`
);
console.log(
  `Player B: \nHealth: ${playerB.health}\nStrength: ${playerB.strength}\nAttack: ${playerB.attack}\n`
);

let intervalID, round = 1;

// random dice roll from 1 to 6 
function getDiceRoll() {
    let min = 1;
    let max = 6;
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// logic for attacking and defending
function handleGame (attacker, defender){
    
    // either of the Player's health becomes 0
    if (attacker.health == 0) {
      console.log(`Player ${defender.id == 0 ? "A" : "B"} wins!`);
      clearInterval(intervalID);
      return;
    }

    if (defender.health == 0) {
      console.log(`Player ${attacker.id == 0 ? "A" : "B"} wins!`);
      clearInterval(intervalID);
      return;
    }

    const attackerDiceRoll = getDiceRoll();
    const defenderDiceRoll = getDiceRoll();

    console.log("Round " + round);

    console.log(
      `Player ${
        attacker.id == 0 ? "A" : "B"
      } (attacker) dice roll is ${attackerDiceRoll}`
    );
    console.log(
      `Player ${
        defender.id == 0 ? "A" : "B"
      } (defender) dice roll is ${defenderDiceRoll}`
    );

    // calculating damage for both attacker and defender
    const attackDamage = attackerDiceRoll * attacker.attack;
    const defendDamage = defenderDiceRoll * defender.strength;

    console.log("Attacker's damage " + attackDamage);
    console.log("Defender's damage " + defendDamage);
    
    // difference between the attacking and defending damage
    const damageDiff = attackDamage - defendDamage;
    if (damageDiff > 0) {
        defender.health = Math.max(0, defender.health - damageDiff);
    }
    console.log(`Defender's health = ${defender.health}`);
    console.log("\n");

    round++;
}

const startGame = () => {
    // initialses the attacker's ID whose health is initially low
    let attackerID = (playerA.health > playerB.health ? playerB.id : playerA.id);
    console.log(`Player ${attackerID == 0 ? 'A' : 'B'} will attack first! \n`);

    intervalID = setInterval(() => {
        if(attackerID == playerA.id){
            handleGame(playerA, playerB)
        }
        else{
            handleGame(playerB, playerA);
        }
        // to switch between the players alternatively
        attackerID = 1 - attackerID;
    }, 1000)
}

// startGame();

module.exports = { startGame, getDiceRoll, handleGame, Player };