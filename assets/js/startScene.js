class StartScene extends Phaser.Scene {
    constructor() {
        super({key: 'StartScene'})
    }

    preload() {
        this.load.image('start', 'assets/images/placeholder.jpg');
    }

    create() {
        // const screen = this.add.image(0,0, 'start').setOrigin(0);
        const introText1 = this.add.text(24, 50, `Gather the Gems`, { fontSize: '15px', fill: '#fff' });
        const introText2 = this.add.text(20, 65, `Avoid the Snakes`, { fontSize: '15px', fill: '#fff' });
        const startPrompt1 = this.add.text(44, 90, `Press Enter`, { fontSize: '15px', fill: '#fff' });
        const startPrompt2 = this.add.text(60, 105, `To Start`, { fontSize: '15px', fill: '#fff' });
        
        this.input.keyboard.on('keydown', () => {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        });
    }
}