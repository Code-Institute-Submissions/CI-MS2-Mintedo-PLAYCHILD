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
        scene: {
            preload: preload,
            create: create,
            update: update
        },
        // scale: {
        //     autoCenter: Phaser.Scale.CENTER_BOTH
        // }
    };
    
    var game = new Phaser.Game(config);
    
    
    function preload() {
    }
    
    function create() {
    }
    
    function update() {
    }
})