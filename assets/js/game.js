<<<<<<< HEAD
// This creates a function name "fight" 
var fight = function(enemy) {
    console.log(enemy);
=======
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// This creates a function name "fight" 

var fight = function(enemyName) {
>>>>>>> bf6ae42ae554e9c61f436a2f5638503418104bf8
    
    // Repeat and execute as long as the enemy-robots is alive
    while (playerHealth > 0 && enemyHealth > 0) {
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
        playerMoney = Math.max(0, playerMoney -10);
        console.log("playerMoney", playerMoney)
        break;
    }
}
   // Generate random damage value baced on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    enemyHealth = Math.max(0, enemyHealth - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth +" health remaing.");
    

    // Check enemy's health 
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    
        // Award player money for winning
        playerMoney = playerMoney + 20;

        // Leave while () loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left." );
    }

    // Generate random damage value baced on player's attack power
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    // Remove player's health by subtracting the amount set in the enemyAttack variable  
    playerHealth = Math.max(0, playerHealth - damage);
    
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    
    // Check player's health 
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
}; // End of while loop 

<<<<<<< HEAD
//Function to generate a random numeric value 
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
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

// Function to start a new game 
=======
// function to start a new game 
>>>>>>> bf6ae42ae554e9c61f436a2f5638503418104bf8
var startGame = function() {
    // Reset player stats 
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++){
    
        if(playerHealth > 0) {
            // Let player know what they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // Pick new enemy to fight based on the index of the enemyNames array 
            var pickedEnemyName = enemyNames[i];

<<<<<<< HEAD
            // Reset enemyHealth before starting new fight 
            pickedEnemyObj.health = randomNumber(40, 60);
=======
            // reset enemyHealth before starting new fight 
            enemyHealth = randomNumber(40, 60);
>>>>>>> bf6ae42ae554e9c61f436a2f5638503418104bf8
            
            // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {

                //Ask if player wants to use the store before next round 
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    
                // If yes, take them to the store() function 
                if (storeConfirm) {
                    shop();
                }
        }
    }
        // If player isn't alive, stop the game
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

<<<<<<< HEAD
    // If player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
=======
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
>>>>>>> bf6ae42ae554e9c61f436a2f5638503418104bf8
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

//function to generate a random numeric value 
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var shop = function(){
    // Ask player what they'd like to do 
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice."
    );

    // Use switch to carry out action 
    switch (shopOptionPrompt){
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for $7.");

            // Increase health and decrease money 
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney -7;
        }
        else {
            window.alert("You don't have enough $.");
        }
            break;
        
        case "UPGRADE":    
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading  player's attack by 6 for $7.");   

            // Increase attack and decrease money 
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7; 
        }
        else {
            window.alert("You don't have enough $.");
        }
            break;
        
        case "LEAVE":    
        case "leave":
            window.alert("Leaving the store.");
            
            // Do nothing, do function will end 
            break;
            default:
                window.alert("You did not pick a valid option. Try again.");
        
            // Call shop() again to force player to pick a valid option 
            shop();
            break;
    }
};

startGame();

