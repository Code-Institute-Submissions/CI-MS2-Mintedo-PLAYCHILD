let score = 0;
let moneyMultiplier = 100;
let speed = .4;
let randomCoord;

let gameState = {
    numCoordinates: {}
};

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.audio('music', ['assets/sound/8-bit-loop.ogg']);
        this.load.audio('collect', ['assets/sound/collectcoin.ogg']);
        this.load.audio('death', ['assets/sound/player-death.ogg']);

        this.load.image('player-idle', 'assets/images/idle.gif');
        this.load.image('player-left', 'assets/images/run-left.gif');
        this.load.image('player-right', 'assets/images/run-right.gif');
        this.load.image('ground', 'assets/images/ground.png')
        this.load.image('snake', 'assets/images/snake.png');
        this.load.image('gem', 'assets/images/Purple-Gem.png');
    }

    create() {
        //Create background
        this.add.image(0, 0, 'ground').setOrigin(0).setScale(1.2);

        //Create and display score
        let scoreText = this.add.text(0, 0, `Treasure: $${score}`, { fontSize: '15px', fill: '#fff' });

        //Creating player sprite and setting boundaries
        gameState.player = this.physics.add.sprite(50, 50, 'player-idle').setScale(.8).refreshBody();
        this.physics.world.setBounds(0, 0, 186, 168);
        gameState.player.setCollideWorldBounds(true);
        gameState.player.body.collideWorldBounds = true;

        //Creating gems in random spots
        randomCoord = assignCoords();
        gameState.gem = this.physics.add.sprite(randomCoord.x, randomCoord.y, 'gem').setScale(.0125).refreshBody();

        //Create snake sprite group
        gameState.enemies = this.physics.add.group();

        //Collision detection between player and gems
        const collectSound = this.sound.add('collect');
        this.physics.add.overlap(gameState.player, gameState.gem, () => {
            // Hide gem upon collecting
            gameState.gem.disableBody();
            // Play collect sound
            collectSound.setVolume(1.2);
            collectSound.play();
            //Move gem somewhere else on canvas
            delete gameState.numCoordinates[`x${gameState.gem.x}y${gameState.gem.y}`];
            randomCoord = assignCoords();
            //Place the gem sprite somewhere new + activate it
            gameState.gem.enableBody(true, randomCoord.x, randomCoord.y);
            // Increase score randomly
            score += (Math.round(Math.random() * 10) * moneyMultiplier);
            //Update score text
            scoreText.setText(`Earnings: \$${score}`);
            //Increment Speed and Money Multiplier with Score
            function incrementScore() {
                let threshold = 1000;
                let minimumRemainder = 1;
                let scoreIsAboveThousand = score % threshold >= minimumRemainder;
                if (scoreIsAboveThousand) {
                    speed += .025;
                    moneyMultiplier += 1;
                    threshold += 1000;
                    minimumRemainder += 1;
                }
            }
            incrementScore();
            //Place snakes randomly
            randomCoord = assignCoords();
            gameState.enemies.create(randomCoord.x, randomCoord.y, 'snake').setScale(.0125);
        });

        //Play music on loop
        const music = this.sound.add('music');
        music.setLoop(true);
        music.setVolume(0.25);
        music.play();

        //Collision detection between player and snake
        this.physics.add.collider(gameState.player, gameState.enemies, () => {
            this.endGame();
            music.stop();
        });

        //Generate random coorinates
        function generateRandomCoords() {
            const randomX = Math.floor(Math.random() * 161 + 25);
            const randomY = Math.floor(Math.random() * 143 + 25);
            return { x: randomX, y: randomY };
        }

        //Function that returns random coordinates (NOT gameState.numCoordinates)
        function assignCoords() {
            let assignedCoord = generateRandomCoords();

            //Stop things being placed where there is already a game object
            while (gameState.numCoordinates[`x${assignedCoord.x}y${assignedCoord.y}`]) {
                assignedCoord = generateRandomCoords();
            }
            //Stop things being placed where the player is
            function isBetween(coord, minMax) {
                return coord+30 >= minMax && coord-30 <= minMax;
            }
            
            while (isBetween(assignedCoord.x, gameState.player.x) && isBetween(assignedCoord.y, gameState.player.y)) {
                assignedCoord = generateRandomCoords();
            }

            gameState.numCoordinates[`x${assignedCoord.x}y${assignedCoord.y}`] = true;

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
        if (rightArrow) {
            movePlayerRight();
        } else if (leftArrow) {
            movePlayerLeft();
        } else if (upArrow) {
            movePlayerUp();
        } else if (downArrow) {
            movePlayerDown();
        }

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
        this.cameras.main.fade(1600, 0, 0, 0, false, function (camera, progress) {
            if (progress > .99) {
                this.scene.stop('GameScene');
                this.scene.start('EndScene');
            }
        });
        const music = this.sound.add('music');
        const death = this.sound.add('death');
        death.setVolume(0.9)
        death.play();
    }
}