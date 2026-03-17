import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { gameConfig } from '../game/config';

// Define the props to accept a Phaser Scene class
interface PhaserGameProps {
  scene: any; // Using 'any' to avoid strict TS constructor type errors
}

export const PhaserGame = ({ scene }: PhaserGameProps) => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameRef.current === null) {
      const dynamicConfig = {
        ...gameConfig,
        scene: [scene],
      };

      gameRef.current = new Phaser.Game(dynamicConfig);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, [scene]); // Re-run if the scene prop changes

  return (
    <div
      id="phaser-container"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};
