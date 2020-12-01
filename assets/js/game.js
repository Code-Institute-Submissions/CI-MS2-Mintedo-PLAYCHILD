// Resolution Settings
let resolution = {};
if (screen.width >= 596) {
    resolution.height = 288;
    resolution.width =315;
} else if (screen.width <= 595) {
    resolution.height = 162;
    resolution.width = 178;    
}

const config = {
    height: resolution.height,
    width: resolution.width,
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