let score = 0;
const moneyMultiplier = 100;
const speed = .5;

let gameState = {
    numCoordinates: {}
};
let randomCoord;

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('player-idle', 'assets/images/idle.gif');
        this.load.image('player-left', 'assets/images/run-left.gif');
        this.load.image('player-right', 'assets/images/run-right.gif');
        this.load.image('snake', 'assets/images/snake.png');
        this.load.image('gem', 'assets/images/gem.png');
    }

    create() {
        //Create and display score
        let scoreText = this.add.text(0, 0, `Treasure: $${score}`, { fontSize: '15px', fill: '#fff' });

        //Creating player sprite and setting boundaries
        gameState.player = this.physics.add.sprite(50, 50, 'player-idle').setScale(1).refreshBody();
        // console.log(gameState);
        this.physics.world.setBounds(0, 0, 168, 186);
        gameState.player.setCollideWorldBounds(true);
        gameState.player.body.collideWorldBounds = true;

        //Creating gems in random spots
        randomCoord = assignCoords();
        gameState.gem = this.physics.add.sprite(randomCoord.x, randomCoord.y, 'gem').setScale(.0125).refreshBody();

        //Create snake sprite group
        gameState.enemies = this.physics.add.group();

        //Collision detection between player and gems
        this.physics.add.overlap(gameState.player, gameState.gem, () => {
            // Hide gem upon collecting
            gameState.gem.disableBody();
            //Move gem somewhere else on canvas
            delete gameState.numCoordinates[`x${gameState.gem.x}y${gameState.gem.y}`];
            randomCoord = assignCoords();
            //Place the gem sprite somewhere new + activate it
            gameState.gem.enableBody(true, randomCoord.x, randomCoord.y);
            // Increase score randomly
            score += (Math.round(Math.random() * 10) * moneyMultiplier);
            //Update score text
            scoreText.setText(`Earnings: \$${score}`);
            //Place snakes randomly
            randomCoord = assignCoords();
            gameState.enemies.create(randomCoord.x, randomCoord.y, 'snake').setScale(.02).refreshBody();
        });

        //Collision detection between player and snake
        this.physics.add.collider(gameState.player, gameState.enemies, () => this.endGame());

        //Generate random coorinates
        function generateRandomCoords() {
            const randomX = Math.floor(Math.random() * 186);
            const randomY = Math.floor(Math.random() * 168);
            return { x: randomX, y: randomY };
        }

        //Function that returns random coordinates (NOT gameState.numCoordinates)
        function assignCoords() {
            let assignedCoord = generateRandomCoords();

            //Stop things being placed where there is already a game object
            while (gameState.numCoordinates[`x${assignedCoord.x}y${assignedCoord.y}`]) {
                assignedCoord = generateRandomCoords()
            }

            gameState.numCoordinates[`x${assignedCoord.x}y${assignedCoord.y}`] = true

            return assignedCoord;
        }
    }

    update() {
        //Moving player
        const cursors = this.input.keyboard.createCursorKeys();
        // Checking whether an arrow key is pressed
        const rightArrow = cursors.right.isDown;
        const leftArrow = cursors.left.isDown;
        const upArrow = cursors.up.isDown;
        const downArrow = cursors.down.isDown;

        // If an arrow key is pressed, players moves
        if (cursors.right.isDown) {
            movePlayerRight();
            console.log('Right');    
        } else if (cursors.left.isDown) {
            movePlayerLeft();
            console.log('Left');
        } else if (cursors.up.isDown) {
            movePlayerUp();
            console.log('Up');
        } else if (cursors.down.isDown) {
            movePlayerDown();
            console.log('Down');
        }

        // Variables to store player coordinates
        const playerXCoord = gameState.player.x;
        const playerYCoord = gameState.player.y;
        console.log(gameState.player.velocity)

        //Check player border collision
        // if (playerXCoord <= 32 || playerXCoord >= 448) {
        //     this.endGame();
        // }

        // if (playerYCoord <= 32 || playerYCoord >= 568) {
        //     this.endGame();
        // }


        //Move player in direction pressed
        function movePlayerRight() {
            gameState.player.setTexture('player-right');
            gameState.player.setVelocityX(150 * speed);
            gameState.player.setVelocityY(0);
        }

        function movePlayerLeft() {
            gameState.player.setTexture('player-left');
            gameState.player.setVelocityX(-150 * speed);
            gameState.player.setVelocityY(0);
        }

        function movePlayerUp() {
            gameState.player.setTexture('player-idle');
            gameState.player.setVelocityX(0);
            gameState.player.setVelocityY(-150 * speed);
        }

        function movePlayerDown() {
            gameState.player.setVelocityX(0);
            gameState.player.setVelocityY(150 * speed);
        }
    }

    //A function that ends the game
    endGame() {
        this.physics.pause();
        this.cameras.main.fade(800, 0, 0, 0, false, function (camera, progress) {
            if (progress > .5) {
                this.scene.stop('GameScene');
                this.scene.start('EndScene');
            }
        });
    }
}