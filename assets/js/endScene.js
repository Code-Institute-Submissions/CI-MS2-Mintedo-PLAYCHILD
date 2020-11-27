class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EndScene' });
    }


    preload() {
        this.load.image('end', 'assets/images/end-image.png');
    }

    create() {
        screen = this.add.image(0, 0, 'end').setOrigin(0).setScale(1.8);

        // Resets score to 0 for next round
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