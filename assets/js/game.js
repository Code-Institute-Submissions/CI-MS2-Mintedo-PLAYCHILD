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
        scene: [StartScene, GameScene, EndScene]
    };
    
    const game = new Phaser.Game(config);
})