
let playerName = window.prompt("What is your robot's Name?");
let playerHealth = 100;
let playerAttack = 10;

// Using multiple values
console.log(playerName, playerHealth, playerAttack);

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;
console.log(enemyName, enemyHealth, enemyAttack);

let fight = function () {
  window.alert("Welcome to Robot Gladiators");

  // Subtract playerAttack value from enemyHealth and update the result of enemyHealth accordingly
  enemyHealth = enemyHealth - playerAttack;

  // log the info into the console to see it works properly
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

  //PLAYER Health check
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  }
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // Subtract enemyAttack value from playerHealth and update the result of playerHealth accordingly
  playerHealth = playerHealth - enemyAttack;

  // ENEMY Health check
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  }
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  // log the info into the console to see it works properly
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

};

fight();