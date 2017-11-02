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
        return [59, 143, 227][Math.floor(Math.random() * 3)];
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
//        console.log(this.x);
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
        this.initialX = 200;
        this.initialY = 375;
        this.sprite = 'images/char-boy.png';
        this.x = this.initialX;
        this.y = this.initialY;
//        this.speed = 100;
    }

    update() {
        allEnemies.forEach(function(enemy) {
            if (enemy.x > player.x - 68 &&
                enemy.x < player.x + 55 &&
                enemy.y === player.y + 20) {
                player.x = player.initialX;
                player.y = player.initialY;
            }
        });
//        if (this.y)
//        this.y += vertical;
//        player.handleInput();
    }

//        this.x += this.speed * dt;
//    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(key) {
        switch(key) {
            case 'up':
//                this.update(-90, 0);
                if (this.y <= 39) {
                    this.x = this.initialX;
                    this.y = this.initialY;
//                    console.log(this.x, this.y);
                } else {
                    this.y -= 84;
                }
//                this.y <= -45 ? (this.x, this.y = this.initialX, this.initialY) : this.y -= 84;
                break;
//                this.update();
//                break;
            case 'down':
//                this.update(90, 0);
//                return 90;
                if (this.y < 375) {
                    this.y += 84;
                }
//                this.update();
                break;
            case 'left':
//                this.update(-100);
//                return -100;
                if (this.x > 0) {
                    this.x -= 100;
                }
//                this.update();
                break;
            case 'right':
//                this.update(100);
//                return 100;
                if (this.x < 400) {
                    this.x += 100;
                }
//                this.update();
        }
        console.log(this.x, this.y);
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

//collision player 200, 207

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
//    console.log(allowedKeys[e.keyCode]);
});
