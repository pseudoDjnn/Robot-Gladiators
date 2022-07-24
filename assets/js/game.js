let randomNumber = function (min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

let playerInfo = {
  name: window.prompt("What is your robot's name?"),
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


// let enemy.names = ["Roborto", "Amy Android", "Robo Trumble"];
// let enemy.health = 50;
// let enemy.attack = 12;


// GAME STATE

// "WIN" - player defeats all enemies
//      Fight all enemies
//       Deafeat each enemy
// "LOSE" - player losses all health


let fight = function (enemy) {
  // WHILE LOOP EXECUTE
  while (playerInfo.health > 0 && enemy.health > 0) {

    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");

    // SKIP penalty and kill loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm skip?
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if true, then leave
      if (confirmSkip) {
        window.alert(name + " has decided to skip this fight.  Goodbye!");
        // subtract money from player
        money = Math.max(0, this.money - 10);
        console.log("money: " + money);
        break;
      }
    }
    let enemyDamage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // Subtract attack value from enemy.health and update the result of enemy.health accordingly
    enemy.health = Math.max(0, enemy.health - enemyDamage);
    // log the info into the console to see it works properly
    console.log(name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

    //ENEMY Health check
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      // prize money for winning
      this.money = money + 20;
      // leave to next fight
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
    let playerDamage = randomNumber(enemy.attack - 3, enemy.attack)
    // Subtract enemy.attack value from health and update the result of health accordingly
    health = Math.max(0, enemy.health - playerDamage);
    // log the info
    console.log(enemy.name + " attacked " + name + ". " + name + " now has " + health + " health remaining");

    // PLAYER Health check
    if (health <= 0) {
      window.alert(name + " has died!");
      break;
    } else {
      window.alert(name + " still has " + health + " health left.");
    }
  }
};

let shop = function () {
  // console.log("entered shop");
  let shopOptPrompt = window.prompt(
    "Would you: REFILL, UPGRADE, Leave? Enter one."
  );
  switch (shopOptPrompt) {
    case "REFILL": //new case
    case "refill":
      playerInfo.refillHealth();
      // if (money >= 7) {
      //   window.alert("Refilling your health for 7 bucks.");

      //   // money for health transaction
      //   health = health + 20;
      //   money = money - 7;
      // } else {
      //   window.alert("u BROKE!");
      // }


      break;
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      // if (money >= 7) {
      //   window.alert("Upgrading attack by 6 for 7 bucks.");

      //   // attack for money
      //   attack = attack + 6;
      //   money = money - 7;
      // } else {
      //   window.alert("u BROKE!");
      // }


      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");

      // nothing done, so end function
      break;
    default:
      window.alert("Select a valid option. Try again.");

      // call shop to force selection
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
    window.alert("Great job, you've survived the game! You now have a score of " + money + ". ")
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