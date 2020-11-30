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

        const introText1 = this.add.text(60, 80, `Gather the Gems`, { fontSize: '22px', fill: '#fff' });
        const introText2 = this.add.text(53, 110, `Avoid the Snakes`, { fontSize: '22px', fill: '#fff' });
        const startPrompt1 = this.add.text(93, 160, `Press Enter`, { fontSize: '19px', fill: '#fff' });
        const startPrompt2 = this.add.text(112, 185, `To Begin`, { fontSize: '19px', fill: '#fff' });

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