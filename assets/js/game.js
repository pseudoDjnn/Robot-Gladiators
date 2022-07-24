let randomNumber = function (min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

let getPlayerName = function () {
  let name = "";

  // ********************
  // ADD LOOP HERE
  // ********************
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?")
  }

  console.log("Your robot's name is " + name);
  return name;
}

let playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling your health 20 points for 7 bucks!")
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have the money!")
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading your attack 6 points for 7 bucks!")
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have the money!")
    }
  },
};

let enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

let fightOrSkip = function () {
  // FIGHT OR SKIP
  let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter your choice.");


  // FALSY conditional recursive function
  if (promptFight === "" || promptFight === null) {
    window.alert("Not valid.  Try again.");
    return fightOrSkip();
  }

  promptFight = promptFight.toLowerCase();

  // SKIP this to stop loop
  if (promptFight === "skip") {
    let confirmSkip = window.prompt("Are you sure?");

    // (TRUE), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has skipped the fight!");
      // subtract the money
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      // return true if you want to leave
      return true;
      // shop();
    }
  }
  return false;
};


let fight = function (enemy) {
  // WHILE LOOP EXECUTE
  while (playerInfo.health > 0 && enemy.health > 0) {
    // let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter your choice.");

    if (fightOrSkip()) {
      // TRUE? leave the fight and break the loop
      break;
    }
    // let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");

    // // SKIP penalty and kill loop
    // if (promptFight === "skip" || promptFight === "SKIP") {
    //   // confirm skip?
    //   let confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //   // if true, then leave
    //   if (confirmSkip) {
    //     window.alert(name + " has decided to skip this fight.  Goodbye!");
    //     // subtract money from player
    //     playerInfo.money = Math.max(0, playerInfo.money - 10);
    //     console.log("playerInfo.money: " + playerInfo.money);
    //     break;
    //   }
  }

  let enemyDamage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

  // Subtract attack value from enemy.health and update the result of enemy.health accordingly
  enemy.health = Math.max(0, enemy.health - enemyDamage);
  // log the info into the console to see it works properly
  console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

  //ENEMY Health check
  if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");

    // prize money for winning
    playerInfo.money = playerInfo.money + 20;
    // leave to next fight
    // break;
  } else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }
  let playerDamage = randomNumber(enemy.attack - 3, enemy.attack)
  // Subtract enemy.attack value from health and update the result of health accordingly
  playerInfo.health = Math.max(0, enemy.health - playerDamage);
  // log the info
  console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining");

  // PLAYER Health check
  if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died!");
    // break;
  } else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
  }
}
// };

let shop = function () {
  // console.log("entered shop");
  let shopOptPrompt = window.prompt(
    "Would you: REFILL, UPGRADE, Leave? Enter 1, 2, 3."
  );
  // debugger;
  shopOptPrompt = parseInt(shopOptPrompt);

  switch (shopOptPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("Select a valid option. Try again.");
      shop();
      break;
  }
};


// WRAPPER start function 
let startGame = function () {
  // stat reset
  playerInfo.reset();

  for (let i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {

      // Let players know round
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      // debugger;

      // picks enemy based off index
      let pickedEnemyObj = enemyInfo[i];

      // health reset when new round starts
      pickedEnemyObj.health = randomNumber(40, 60);

      // added debugger to provide check
      // debugger;

      fight(pickedEnemyObj);
      // if not at last enemy
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask player to shop
        let storeConfirm = window.confirm("This fight is over, visit the store");

        // if yes, take them to the store
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};


let endGame = function () {
  window.alert("Game ended. Lets see how you did!");
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ". ")
  } else {
    window.alert("You've lost your robot in battle.");
  }
};
let playAgainConfirm =
  window.confirm("Would you like to play agian?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} else {
  window.alert("Thanks for playing! Come back soon!")
};


startGame();