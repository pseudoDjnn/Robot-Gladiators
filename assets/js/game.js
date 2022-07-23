
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
  // GAME INIT ALERT
  // window.alert("Welcome to Robot Gladiators");
  // FIGHT PROMPT
  let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.")

  // player choice for promptFIGHT question
  if (promptFight === "fight" || promptFight === "FIGHT") {

    // Subtract playerAttack value from enemyHealth and update the result of enemyHealth accordingly
    enemyHealth = enemyHealth - playerAttack;
    // log the info into the console to see it works properly
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //ENEMY Health check
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract enemyAttack value from playerHealth and update the result of playerHealth accordingly
    playerHealth = playerHealth - enemyAttack;
    // log the info
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");

    // PLAYER Health check
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // Choose to SKIP
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    let confirmSkip = window.confirm("Are you sure you's like to quit?");
    // if fight then leave
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight.  Goodbye!");
      // subtract money from player
      playerMoney = playerMoney - 5;
    }
    // if false, ask again
    else {
      fight();
    }
    // if neither prompt again
  } else {
    window.alert("You need to pick a valid option.  Try again!");
  }
};  //end of fight function

for (let i = 0; i < enemyNames.length; i++) {
  // start fight function
  fight(enemyNames[i]);
}