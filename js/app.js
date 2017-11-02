// Enemies our player must avoid
class Enemy {
    constructor() {
//        let randomPosX = () => ((Math.random() * 200) - 320);//Math.random() * (-120 - -520) + -520;//-120 -520;
//        let randomPosX = function() {
//            return (Math.random() * 200) - 320;
//        };
        this.sprite = 'images/enemy-bug.png';
        this.x = this.randomPosX();//(Math.random() * 200) - 320;
        this.y = this.randomPosY();//[60, 143, 227][Math.floor(Math.random() * 3)];
        this.speed = this.randomSpeed();//[50, 100, 200, 300][Math.floor(Math.random() * 4)];
    }

//    function getRandomArbitrary(min, max) {
//      return Math.random() * (max - min) + min;
//    }

    randomPosX() {
        return ((Math.random() * 400) - 520);
    }

    randomPosY() {
        return [60, 143, 227][Math.floor(Math.random() * 3)];
    }

    randomSpeed() {
        return ((Math.random() * 150) + 50);
//        return [50, 100, 200, 300][Math.floor(Math.random() * 4)];
    }

    update(dt) {
//        this.x += speed;//-120 -420;
//        this.x += this.speed * dt;
        if (this.x > 550) {
            this.x -= 850;
            this.y = this.randomPosY();
            this.speed = this.randomSpeed();
        } else {
            this.x += this.speed * dt;
        }
//        (this.x > 550) ? (this.x = this.x - 850) : (this.x += this.speed * dt);

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

//var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
//    this.sprite = 'images/enemy-bug.png';
//};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
//};

// Draw the enemy on the screen, required method for game
//Enemy.prototype.render = function() {
//    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
//};

class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
    }

    update(dt) {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput() {

    }
}

let allEnemies = [];
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();
const enemy5 = new Enemy();

allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);



const player = new Player();

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
