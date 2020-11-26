class StartScene extends Phaser.Scene {
    constructor() {
        super({key: 'StartScene'})
    }

    preload() {
        this.preload.image('start', 'assets/images/placeholder.jpg');
    }

    create() {
        const screen = this.add.image(0,0, 'start').setOrigin(0);
        
        this.input.keyboard.on('keydown', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        });
    }
}