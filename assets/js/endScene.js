class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EndScene' });
    }

    preload() {
        this.load.image('end', 'assets/images/end-image.png');
    }

    create() {
        this.cameras.main.fadeIn(600);

        screen = this.add.image(0, 0, 'end').setOrigin(0).setScale(3);
        const finalScore = this.add.text(68, 30, `Score: $${score}`, {fontSize: '25px', fill: '#fff'});
        const replayText1 = this.add.text(80, 190, `Press any key`, {fontSize: '20px', fill: '#fff'});
        const replayText2 = this.add.text(80, 220, `to play again`, {fontSize: '20px', fill: '#fff'});

        // Resets score, money multiplier and speed for next round
        score = 0;
        moneyMultiplier = 100;
        speed = .4;

        // Reset object positions
        gameState.numCoordinates = {};

        this.input.keyboard.on('keydown', () => {
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
        });
    }
}