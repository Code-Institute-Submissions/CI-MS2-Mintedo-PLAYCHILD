$(document).ready(function() {
    const config = {
        height: 288,
        width: 315,
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
        scene: [StartScene, GameScene, EndScene]
    };
    
    function createGame() {
        const game = new Phaser.Game(config);
    }

    setTimeout(createGame, 2500);
});