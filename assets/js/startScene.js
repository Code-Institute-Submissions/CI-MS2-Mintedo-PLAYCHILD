class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' })
    }

    preload() {
        this.load.audio('ping', ['assets/sound/Gameboy_Startup_Sound.ogg']);
        this.load.audio('startSound', ['assets/sound/start-game.ogg']);
    }

    create() {
        const startGameSound = this.sound.add('startSound');
        const startupSound = this.sound.add('ping');
        startupSound.play();

        const introText1 = this.add.text(60, 60, `Gather the Gems`, { fontSize: '22px', fill: '#fff' });
        const introText2 = this.add.text(53, 90, `Avoid the Snakes`, { fontSize: '22px', fill: '#fff' });
        const startPrompt1 = this.add.text(93, 150, `Press Enter`, { fontSize: '19px', fill: '#fff' });
        const startPrompt2 = this.add.text(112, 175, `To Begin`, { fontSize: '19px', fill: '#fff' });

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