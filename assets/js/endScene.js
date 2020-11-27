class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EndScene' });
    }

    preload() {
        this.load.image('end', 'assets/images/end-image.png');
    }

    create() {
        screen = this.add.image(0, 0, 'end').setOrigin(0).setScale(1.8);
        const replayText1 = this.add.text(35, 110, `Press any key`, {fontSize: '15px', fill: '#fff' });
        const replayText2 = this.add.text(35, 125, `to play again`, {fontSize: '15px', fill: '#fff' });

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