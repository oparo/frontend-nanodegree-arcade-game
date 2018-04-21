const Movex = 101;
const Movey = 83;

// Enemies our player must avoid
var Enemy = function(bugX,bugY,bugD) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = bugX;
    this.y = bugY;
    this.dir=bugD;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += Movex * dt * this.dir;
    if (this.x > 550) {
      this.x = -120;
    } else if (this.x < -120){
      this.x = 550;
    }

    // Check for collissions
    if (this.y == player.y && Math.abs(this.x - player.x) < 70 )
    {
      console.log("Boom...");
      alert("You got hit by a bug. Game will reset. Try again");
      player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {

    this.sprite = 'images/char-boy.png';
    this.reset();
};

Player.prototype.update = function(dt){

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    if (this.y <= 0) {
      alert ("Congratulations. You Win!!!");
      this.reset();
    }
};

Player.prototype.handleInput = function (stroke) {

    if (stroke == 'left' && this.x > 0) {
      this.x -=  Movex
    } else if (stroke == 'right' && this.x < 350) {
      this.x +=  Movex
    } else if (stroke == 'up' && this.y > 0) {
      this.y -= Movey
      console.log (this.x, this.y);
    } else if (stroke == 'down' && this.y < 350) {
      this.y += Movey
    } /*else if (stroke == 'up') {
      //alert("You Win!!!");
    }*/
};

Player.prototype.reset = function() {
    this.x = 195;
    this.y = 401;//314
}

// Now instantiate your  objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(-100,69,5), new Enemy(425,152,-2), new Enemy(-300,235,3)];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
