import Phaser from 'phaser';

export class BlankScene extends Phaser.Scene {
  constructor() {
    super('BlankScene');
  }

  create() {
    this.cameras.main.setBackgroundColor('#511e43');
  }
}
