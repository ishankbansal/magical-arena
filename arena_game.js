class player {
  constructor(id, health, strength, attack) {
    this.id = id;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }
}

// initialisation of players
const playerA = new player(0, 50, 5, 10);
const playerB = new player(1, 100, 10, 5);

console.log(
  `Player A:- \nHealth: ${playerA.health}\nStrength: ${playerA.strength}\nAttack: ${playerA.attack}\n`
);
console.log(
  `Player B:- \nHealth: ${playerB.health}\nStrength: ${playerB.strength}\nAttack: ${playerB.attack}\n`
);

let intervalID, round = 1;

function getDiceRoll() {
    let min = 1;
    let max = 6;
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function handleGame (attacker, defender){
    
}

const startGame = () => {
    let attackerID = (playerA.health > playerB.health ? playerB.id : playerA.id);
    console.log(`Player ${attackerID == 0 ? 'A' : 'B'} will attack first! \n`);
    intervalID = setInterval(() => {
        if(attackerID == playerA.id){
            handleGame(playerA, playerB)
        }
        else{
            handleGame(playerB, playerA);
        }
        attackerID = 1 - attackerID;
    }, 1000)
}

startGame();