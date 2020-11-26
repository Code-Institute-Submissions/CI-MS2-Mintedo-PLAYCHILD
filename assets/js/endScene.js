class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EndScene' });
    }


    preload() {
        this.load.image('end', 'assets/images/end-image.png');
    }

    create() {
        screen = this.add.image('end', 0, 0).setOrigin(0).setScale(2);

        // Resets score to 0 for next round
        score = 0;

        // Reset object positions
        gameState.numCoordinates = {};

        this.input.keyboard.on('keydown', () => {
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
        });
    }
}