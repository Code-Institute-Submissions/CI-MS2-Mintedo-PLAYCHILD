class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' })
    }

    preload() {
        this.load.audio('ping', ['assets/sound/Gameboy_Startup_Sound.ogg']);
        this.load.audio('startSound', ['assets/sound/start-game.ogg']);
    }

    create() {
        // Resolution settings based on display size
        resolution = {};
        if (screen.width >= 596) {
            resolution.introText1PosX = 60;
            resolution.introText1PosY = 80;
            resolution.introText2PosX = 53;
            resolution.introText2PosY = 110;
            resolution.introTextFontSize = '22px';
            resolution.startPrompt1PosX = 93;
            resolution.startPrompt1PosY = 160;
            resolution.startPrompt2PozX = 112;
            resolution.startPrompt2PozY = 185;
            resolution.startPromptFontSize = '19px';
        } else if (screen.width <= 595) {
            resolution.introText1PosX = 21;
            resolution.introText1PosY = 32;
            resolution.introText2PosX = 17;
            resolution.introText2PosY = 52;
            resolution.introTextFontSize = '15px';
            resolution.startPrompt1PosX = 40;
            resolution.startPrompt1PosY = 95;
            resolution.startPrompt2PozX = 55;
            resolution.startPrompt2PozY = 110;
            resolution.startPromptFontSize = '14px';
        }

        const startGameSound = this.sound.add('startSound');
        const startupSound = this.sound.add('ping');
        startupSound.play();

        const introText1 = this.add.text(resolution.introText1PosX, resolution.introText1PosY, `Gather the Gems`, { fontSize: resolution.introTextFontSize, fill: '#fff' });
        const introText2 = this.add.text(resolution.introText2PosX, resolution.introText2PosY, `Avoid the Snakes`, { fontSize: resolution.introTextFontSize, fill: '#fff' });
        const startPrompt1 = this.add.text(resolution.startPrompt1PosX, resolution.startPrompt1PosY, `Press Enter`, { fontSize: resolution.startPromptFontSize, fill: '#fff' });
        const startPrompt2 = this.add.text(resolution.startPrompt2PozX, resolution.startPrompt2PozY, `To Begin`, { fontSize: resolution.startPromptFontSize, fill: '#fff' });

        //Blinking Text Class from https://www.stephengarside.co.uk/blog/phaser-3-flashing-text-easy-example/
        class TweenHelper {
            static flashElement(scene, element, repeat = true, easing = 'Linear', overallDuration = 1000, visiblePauseDuration = 400) {
                if (scene && element) {
                    let flashDuration = overallDuration - visiblePauseDuration / 2;

                    scene.tweens.timeline({
                        tweens: [
                            {
                                targets: element,
                                duration: 0,
                                alpha: 0,
                                ease: easing
                            },
                            {
                                targets: element,
                                duration: flashDuration,
                                alpha: 1,
                                ease: easing
                            },
                            {
                                targets: element,
                                duration: visiblePauseDuration,
                                alpha: 1,
                                ease: easing
                            },
                            {
                                targets: element,
                                duration: flashDuration,
                                alpha: 0,
                                ease: easing,
                                onComplete: () => {
                                    if (repeat === true) {
                                        this.flashElement(scene, element);
                                    }
                                }
                            }
                        ]
                    });
                }
            }
        }
        TweenHelper.flashElement(this, startPrompt1);
        TweenHelper.flashElement(this, startPrompt2);

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