
let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;


let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;


// GAME STATE

// "WIN" - player defeats all enemies
//      Fight all enemies
//       Deafeat each enemy
// "LOSE" - player losses all health


let fight = function (enemyName) {
  // WHILE LOOP EXECUTE
  while (playerHealth > 0 && enemyHealth > 0) {

    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");

    // SKIP penalty and kill loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm skip?
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if true, then leave
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.  Goodbye!");
        // subtract money from player
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney: " + playerMoney);
        break;
      }
    }
    let enemyDamage = randomNumber(playerAttack - 3, playerAttack);

    // Subtract playerAttack value from enemyHealth and update the result of enemyHealth accordingly
    enemyHealth = Math.max(0, enemyHealth - enemyDamage);
    // log the info into the console to see it works properly
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //ENEMY Health check
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // prize money for winning
      playerMoney = playerMoney + 20;
      // leave to next fight
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    let playerDamage = randomNumber(enemyAttack - 3, enemyAttack)
    // Subtract enemyAttack value from playerHealth and update the result of playerHealth accordingly
    playerHealth = Math.max(0, playerHealth - playerDamage);
    // log the info
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");

    // PLAYER Health check
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
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
      if (playerMoney >= 7) {
        window.alert("Refilling your health for 7 bucks.");

        // money for health transaction
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("u BROKE!");
      }


      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading attack by 6 for 7 bucks.");

        // attack for money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("u BROKE!");
      }


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

let randomNumber = function (min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// WRAPPER start function 
let startGame = function () {
  // stat reset
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (let i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {

      // Let players know round
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // picks enemy based off index
      let pickedEnemyName = enemyNames[i];

      // health reset when new round starts
      enemyHealth = randomNumber(40, 60);

      // added debugger to provide check
      // debugger;

      fight(pickedEnemyName);
      // if not at last enemy
      if (playerHealth > 0 && i < enemyNames.length - 1) {
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
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ". ")
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