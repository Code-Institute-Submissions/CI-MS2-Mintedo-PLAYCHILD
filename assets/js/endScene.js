class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EndScene' });
    }

    preload() {
        this.load.image('end', 'assets/images/end-image.png');
        this.load.audio('startSound', ['assets/sound/start-game.ogg']);
    }

    create() {
        // Resolution settings based on display size
        resolution = {};
        if (screen.width >= 596) {
            resolution.endImageScale = 3;
            resolution.finalScoreFontSize = '25px';
            resolution.finalScorePosX = 60;
            resolution.finalScorePosY = 30;
            resolution.replayTextFontSize = '20px';
            resolution.replayText1PosX = 80;
            resolution.replayText1PosY = 190;
            resolution.replayText2PosX = 80;
            resolution.replayText2PosY = 220;
        } else if (screen.width <= 595) {
            resolution.endImageScale = 1.65;
            resolution.finalScoreFontSize = '16px';
            resolution.finalScorePosX = 32;
            resolution.finalScorePosY = 20;
            resolution.replayTextFontSize = '15px';
            resolution.replayText1PosX = 30;
            resolution.replayText1PosY = 110;
            resolution.replayText2PosX = 30;
            resolution.replayText2PosY = 127;
        }

        const startGameSound = this.sound.add('startSound');
        this.cameras.main.fadeIn(600);

        const theEnd = this.add.image(0, 0, 'end').setOrigin(0).setScale(resolution.endImageScale);
        const finalScore = this.add.text(resolution.finalScorePosX, resolution.finalScorePosY, `Score: $${score}`, { fontSize: resolution.finalScoreFontSize, fill: '#fff' });
        const replayText1 = this.add.text(resolution.replayText1PosX, resolution.replayText1PosY, `Press any key`, { fontSize: resolution.replayTextFontSize, fill: '#fff' });
        const replayText2 = this.add.text(resolution.replayText2PosX, resolution.replayText2PosY, `to play again`, { fontSize: resolution.replayTextFontSize, fill: '#fff' });

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
        TweenHelper.flashElement(this, replayText1);
        TweenHelper.flashElement(this, replayText2);

        // Resets score, money multiplier and speed for next round
        score = 0;
        moneyMultiplier = 100;
        screen.width >= 596 ? speed = .4 : speed = .26;

        // Reset object positions
        gameState.numCoordinates = {};

        this.input.keyboard.on('keydown', () => {
            this.scene.stop('EndScene');
            startGameSound.play();
            this.scene.start('GameScene');
        });
    }
}