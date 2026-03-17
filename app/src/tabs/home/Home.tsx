import React from 'react';
import GlobalNavbar from '../GlobalNavbar'; // Your existing navbar
import { PhaserGame } from '../../components/PhaserGame'; // The wrapper we created
import { HomeScene } from '../../game/scenes/HomeScene';

export default function Home() {
  return (
    <div
      className="home-container"
      style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}
    >
      <PhaserGame scene={HomeScene} />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <GlobalNavbar />
        </div>

        <div className="content">{/* Any other text you had goes here */}</div>
      </div>
    </div>
  );
}
