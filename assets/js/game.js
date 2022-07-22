// creating a function named "fight"

function fight() {

  let playerName = window.prompt("What is your robot's Name?");
  console.log(playerName);
  console.log("This is a string, good for messages");
  // math
  console.log(10 + 10);
  // what is this?!
  console.log("Our robot's name is " + playerName);
  // Concatenating
  console.log("Your robot, " + playerName + ",has won!");

  window.alert(playerName);
};

fight();