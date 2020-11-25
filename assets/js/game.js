$(document).ready(function() {
    const config = {
        height: 168,
        width: 186,
        type: Phaser.WEBGL.AUTO,
        parent: 'gameScene',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: [startScene, gameScene, endScene]
    };
    
    var game = new Phaser.Game(config);
})