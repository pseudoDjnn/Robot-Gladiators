
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
        playerMoney = playerMoney - 10;
        console.log("playerMoney: " + playerMoney);
        break;
      }
    }

    // Subtract playerAttack value from enemyHealth and update the result of enemyHealth accordingly
    enemyHealth = enemyHealth - playerAttack;
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
    // Subtract enemyAttack value from playerHealth and update the result of playerHealth accordingly
    playerHealth = playerHealth - enemyAttack;
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

for (let i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {

    // Let players know round
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // picks enemy based off index
    let pickedEnemyName = enemyNames[i];

    // health reset when new round starts
    enemyHealth = 50;

    // added debugger to provide check
    // debugger;

    fight(pickedEnemyName);
  }
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}