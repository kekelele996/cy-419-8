import Phaser from 'phaser'; export class GameOverScene extends Phaser.Scene { constructor(){ super('GameOverScene'); } create(){ this.add.text(20,20,'Game Over'); } }
