/* GAME FUNCTIONS */

//Function to generate a random numeric value 
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// This creates a function name "fight" 
var fight = function(enemy) {

    // Repeat and execute as long as the enemy-robots is alive
    while (playerInfo.health > 0 && enemy.health > 0) {
    // Prompt the player if they want to fight or skip the battle.
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.");

    // If player choses to skip
  if (promptFight === "skip" || promptFight === "SKIP") {
        
    // Confirm player wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip){
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping 
        playerInfo.money = Math.max(0, playerInfo.money -10);
        console.log("playerInfo.money", playerInfo.money)
        break;
    }
}
   // Generate random damage value baced on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    enemy.health = Math.max(0, enemy.health - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health +" health remaing.");

    // Check enemy's health 
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
    
        // Award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // Leave while () loop since enemy is dead
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left." );
    }

    // Remove player's health by subtracting the amount set in the enemy.attack variable 
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    // Remove player's health by subtracting the amount set in the enemyAttack variable  
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
    
    // Check player's health 
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
    } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }// End of while loop 
}; // End of fight function 

// Function to start a new game 
var startGame = function() {
    // Reset player stats 
    playerInfo.reset ();

    // Fight each enemy robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyInfo.length; i++){
        // If player is still alive, keep fighting next enenmy 
        if(playerInfo.health > 0) {
            // Let player know what they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            // Pick new enemy to fight based on the index of the enemyNames array 
            var pickedEnemyObj = enemyInfo[i];

            // Set health for picked enemy 
            pickedEnemyObj.health = randomNumber(40, 60);
            
            // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);

            // If player is still alive and we're not at the last enemy in the array 
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

                //Ask if player wants to use the store before next round 
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    
                // If yes, take them to the store() function 
                if (storeConfirm) {
                    shop();
                }
        }
    }
        // If player isn't alive, break out of the loop and let endGame function run 
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
            }
    }
    
    // After the loop ends, player is either out of health or enemies to fight, so run the endGame function 
    endGame();
};


// Function to END the entire game 
var endGame = function() {

    // If player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    
    // Ask player if they'd like to play again 
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //Restart the game 
        startGame();
    }
    else{
        window.alert("Thank you plying Robot Gladiators! Come back soon!");
    }

};

// Go to shop between battles function 
var shop = function(){
    // Ask player what they'd like to do 
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice."
    );

    // Use switch to carry out action 
    switch (shopOptionPrompt){
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;

        case "UPGRADE":    
        case "upgrade":
            playerInfo.ungradeAttack();
            break;
        
        case "LEAVE":    
        case "leave":
            window.alert("Leaving the store.");
            
            // Do nothing, so function will end 
            break;
            default:
                window.alert("You did not pick a valid option. Try again.");
        
            // Call shop() again to force player to pick a valid option 
            shop();
            break;
    }
};

/* END OF FUNCTIONS */

// Function to set name
var getPlayerName = function(){
    var name = "";
    
    // While loop 
    while (name === ""|| name === null){
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
};
//Player information 

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money:10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack =10;
    }, // Comma!
    refillHealth: function() {
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for $7.");
            this.health += 20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    ungradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6for $7.");
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    }
};

// Enemy information 
var enemyInfo = [
    {
        name: "Roberto",
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

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]["attack"]);

/* END GAME INFORMATION / VARIABLES */

/* RUN GAME */
startGame();
debugger;
