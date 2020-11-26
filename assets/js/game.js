$(document).ready(function() {
    const config = {
        height: 168,
        width: 186,
        type: Phaser.WEBGL.AUTO,
        parent: 'gameScene',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: 0,
                enableBody: true
            }
        },
        scene: [startScene, gameScene, endScene]
    };
    
    const game = new Phaser.Game(config);
})