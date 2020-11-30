$(document).ready(function() {
    const config = {
        height: 168,
        width: 186,
        resolution: window.devicePixelRatio,
        type: Phaser.WEBGL.AUTO,
        parent: 'game-scene',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: 0,
                enableBody: true
            }
        },
        scene: [StartScene, GameScene, EndScene],
        scale: {
            mode: Phaser.Scale.FIT
        }
    };
    
    function createGame() {
        const game = new Phaser.Game(config);
    }

    setTimeout(createGame, 2500);
});