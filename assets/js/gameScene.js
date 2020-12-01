let score = 0;
let moneyMultiplier = 100;
let speed;
screen.width >= 596 ? speed = .4 : speed = .26;
let randomCoord;

// Creating the gamestate object to hold our objects' coordinates
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

        this.load.spritesheet('player-idle', 'assets/images/player-idle-spritesheet.png', { frameWidth: 19, frameHeight: 34 });
        this.load.spritesheet('player-run-left', 'assets/images/player-run-left-spritesheet.png', { frameWidth: 21, frameHeight: 33 });
        this.load.spritesheet('player-run-right', 'assets/images/player-run-right-spritesheet.png', { frameWidth: 21, frameHeight: 33 });
        this.load.spritesheet('snake-spritesheet', 'assets/images/snake-spritesheet.png', { frameWidth: 32, frameHeight: 32 });

        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('gem', 'assets/images/Purple-Gem.png');
    }

    create() {
        // Resolution settings based on display size
        resolution = {};
        if (screen.width >= 596) {
            resolution.height = 288;
            resolution.width = 315;
            resolution.backgroundScale = 2;
            resolution.smallFont = '20px';
            resolution.playerStartingPosX = 75;
            resolution.playerStartingPosY = 100;
            resolution.playerScale = 1.05;
            resolution.gemScale = .02;
            resolution.snakeScale = .75;
            resolution.snakeSizeX = 20;
            resolution.snakeSizeY = 20;
            resolution.randomCoordX = 290;
            resolution.randomCoordY = 263;

        } else if (screen.width <= 595) {
            resolution.height = 162;
            resolution.width = 178;
            resolution.backgroundScale = 1.1;
            resolution.smallFont = '15px';
            resolution.playerStartingPosX = 50;
            resolution.playerStartingPosY = 50;
            resolution.playerScale = .6;
            resolution.gemScale = .0125;
            resolution.snakeScale = .5;
            resolution.snakeSizeX = 9;
            resolution.snakeSizeY = 9;
            resolution.randomCoordX = 153;
            resolution.randomCoordY = 137;
        }

        //Create background
        this.add.image(0, 0, 'ground').setOrigin(0).setScale(resolution.backgroundScale).setSize(resolution.width, resolution.width);

        //Create and display score
        let scoreText = this.add.text(0, 0, `Treasure: $${score}`, { fontSize: resolution.smallFont, fill: '#fff' });

        //Creating player sprite and setting boundaries
        gameState.player = this.physics.add.sprite(resolution.playerStartingPosX, resolution.playerStartingPosY, 'player-idle').setScale(resolution.playerScale).refreshBody();
        this.physics.world.setBounds(0, 0, resolution.width, resolution.height);
        gameState.player.setCollideWorldBounds(true);
        gameState.player.body.collideWorldBounds = true;

        //Resume any upaused animations from previous game
        this.anims.resumeAll();

        //Player Animations - referenced http://phaser.io/tutorials/making-your-first-phaser-3-game/part7
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player-idle', { start: 0, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player-run-left', { start: 0, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player-run-right', { start: 0, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        //Play idle animation on game start
        gameState.player.anims.play('idle', true);

        //Creating gems in random spots
        randomCoord = assignCoords();
        gameState.gem = this.physics.add.sprite(randomCoord.x, randomCoord.y, 'gem').setScale(resolution.gemScale).refreshBody();

        //Create snake sprite group
        gameState.enemies = this.physics.add.group().playAnimation('snake-idle');

        // Create snake animations
        this.anims.create({
            key: 'snake-idle',
            frames: this.anims.generateFrameNumbers('snake-spritesheet', { start: 0, end: 2 }),
            frameRate: 3,
            repeat: -1
        });

        //Collision detection between player and gems
        //Play collect sound
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
            gameState.enemies.create(randomCoord.x, randomCoord.y, 'snake-idle').setScale(resolution.snakeScale).setSize(resolution.snakeSizeX, resolution.snakeSizeY);
            Phaser.Actions.Call(gameState.enemies.getChildren(), child => {
                child.anims.play('snake-idle');
            });
        })

        //Play music on loop
        const music = this.sound.add('music');
        music.setLoop(true);
        music.setVolume(0.24);
        music.play();

        //Collision detection between player and snake
        this.physics.add.collider(gameState.player, gameState.enemies, () => {
            this.endGame();
            music.stop();
        });

        //Generate random coorinates
        function generateRandomCoords() {
            const randomX = Math.floor(Math.random() * resolution.randomCoordX + 25);
            const randomY = Math.floor(Math.random() * resolution.randomCoordY + 25);
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
                return coord + 75 >= minMax && coord - 75 <= minMax;
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
            gameState.player.setVelocityX(150 * speed);
            gameState.player.setVelocityY(0);
            gameState.player.anims.play('right', true);
        }

        function movePlayerLeft() {
            gameState.player.setVelocityX(-150 * speed);
            gameState.player.setVelocityY(0);
            gameState.player.anims.play('left', true);
        }

        function movePlayerUp() {
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
        this.anims.pauseAll();
    }
}