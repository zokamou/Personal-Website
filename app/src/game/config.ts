import Phaser from 'phaser';
import { HomeScene } from './scenes/HomeScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  pixelArt: true,
  backgroundColor: '#282c34', // Matches standard dark theme
  scale: {
    mode: Phaser.Scale.RESIZE, // Auto-resize to fit window
    width: '100%',
    height: '100%',
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0, x: 0 }, // No gravity for top-down
    },
  },
};
