class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EndScene' });
    }


    preload() {
        this.load.image('end', 'placeholder.jpg');
    }

    create() {
        screen = this.addEventListener.image(0, 0, 0, 'end').setOrigin(0);

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