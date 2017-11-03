// Enemies our player must avoid
class Enemy {
    constructor() {
        // The image/sprite for our enemies, using a provided helper to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.x = this.randomPosX();
        this.y = this.randomPosY();
        this.speed = this.randomSpeed();
    }

    //  Return a random number between min and max, from
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //
    //  function getRandomArbitrary(min, max) {
    //      return Math.random() * (max - min) + min;
    //  }
    //
    //  Pass in -920 as min value, and -120 as max value
    //  to have greater variation in x starting positions
    randomPosX() {
        return ((Math.random() * 800) - 920);
    }

    //  Choose random enemy position
    //  (either one of the lines for the three stone blocks)
    randomPosY() {
        return [59, 143, 227][Math.floor(Math.random() * 3)];
    }

    //  Return a random number between 50 and 200
    randomSpeed() {
        return ((Math.random() * 150) + 50);
    }

    //  Update the enemy's position
    //  Parameter: dt, a time delta between ticks, multiplied to movement parameter
    //  to ensure the game runs at the same speed for all computers.
    update(dt) {
        if (this.x > 550) {
            this.x -= 850;
            this.y = this.randomPosY();
            this.speed = this.randomSpeed();
        } else {
            this.x += this.speed * dt;
        }
    }

    //  Draw the enemy on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {
    constructor() {
        //  Set initial position to bottom center
        this.initialX = 200;
        this.initialY = 375;
        this.sprite = 'images/char-boy.png';
        this.x = this.initialX;
        this.y = this.initialY;
    }

    //  Check collisions: check all enemy positions vis-a-vis player position
    //  and send player back to initial position if collided
    update() {
        allEnemies.forEach(function(enemy) {
            if (enemy.x > player.x - 68 &&
                enemy.x < player.x + 55 &&
                enemy.y === player.y + 20) {
                player.x = player.initialX;
                player.y = player.initialY;
            }
        });
    }

    //  Draw the player on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    //  Take input from keyup event listener below and
    //  move character by 1 block for each direction
    handleInput(key) {
        switch(key) {
            case 'up':
                if (this.y <= 39) {
                    //  Send player back to initial position on reaching water block
                    this.x = this.initialX;
                    this.y = this.initialY;
                } else {
                    this.y -= 84;//  Move player up by one block
                }
                break;
            case 'down':
                // Prevent player to move past the last bottom block
                if (this.y < 375) {
                    this.y += 84;//  Move player down by one block
                }
                break;
            case 'left':
                // Prevent player to move past the last left block
                if (this.x > 0) {
                    this.x -= 100;//  Move player left by one block
                }
                break;
            case 'right':
                // Prevent player to move past the last right block
                if (this.x < 400) {
                    this.x += 100;//  Move player right by one block
                }
        }
    }
}

//  Instantiate objects
let allEnemies = [];
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();
const enemy5 = new Enemy();
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);
const player = new Player();

//  Listen for key presses and send keys to Player.handleInput() method
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
