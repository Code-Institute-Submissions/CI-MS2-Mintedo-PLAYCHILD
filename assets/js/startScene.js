class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' })
    }

    preload() {
        this.load.image('start', 'assets/images/placeholder.jpg');
        this.load.audio('ping', ['assets/sound/Gameboy_Startup_Sound.ogg']);
        this.load.audio('startSound', ['assets/sound/start-game.ogg']);
    }

    create() {
        const startGameSound = this.sound.add('startSound');
        const startupSound = this.sound.add('ping');
        startupSound.play();

        const introText1 = this.add.text(24, 50, `Gather the Gems`, { fontSize: '15px', fill: '#fff' });
        const introText2 = this.add.text(20, 65, `Avoid the Snakes`, { fontSize: '15px', fill: '#fff' });
        const startPrompt1 = this.add.text(44, 90, `Press Enter`, { fontSize: '15px', fill: '#fff' });
        const startPrompt2 = this.add.text(60, 105, `To Start`, { fontSize: '15px', fill: '#fff' });

        this.input.keyboard.on('keydown', (e) => {
            const keypressIsEnter = e.keyCode === 13;
            if (keypressIsEnter) {
                this.scene.stop('StartScene');
                this.scene.start('GameScene');
                startGameSound.play();
            };
        });
    }
}