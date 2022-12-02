var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// This creates a function name "fight" 

var fight = function(enemyName) {
    
    // Repeat and execute as long as the enemy-robots is alive
    while(playerHealth > 0 && enemyHealth > 0) {
// Alert players that they are starting the round
//window.alert("Welcome to Robot Gladiators!");

    // Prompt the player if they want to fight or skip the battle.
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.");

    
    // If player choses to skip
  if (promptFight === "skip" || promptFight === "SKIP") {
        
    // Confirm player wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping 
        playerMoney = playerMoney -10;
        console.log("playerMoney", playerMoney)
        break;
    }
}
   
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth +" health remaing.");

    // Check enemy's health 
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    
        // Award player money for winning
        playerMoney = playerMoney + 20
        // Leave while () loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left." );
    }

    // Remove player's health by subtracting the amount set in the enemyAttack variable  
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    
    // Check player's health 
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
}; // End of while loop 

for(var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // Call fight function with enemy-robot
    fight(pickedEnemyName);
};

