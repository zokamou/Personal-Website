import Image from 'next/image';
import profilePic from "./assets/profile_pic.jpg";
import styles from "./page.module.css";
import React from 'react';
import {Button} from '@mui/material';

export default function Home() {
  return (
    <main className={styles.outline}>
      <h1 className={styles.header}>Zoe Feller - Projects</h1>
      <div className={styles.main}>
        <div className={styles.pfpLayout}>
          <Image className={styles.pfp} src={profilePic} alt="pfp" />
          <p className={styles.description}>
            Hello! <br></br> <br></br> 
            My name is Zoe Feller and I am a senior at
            UC Santa Cruz. I am studying Computer Science Game Design with a minor in Computer Science.
            I am extremely passionate about game design and full-stack web development. Here are a few of the projects
            I have worked on in the past year. <br></br> <br></br> 
            Enjoy!
          </p>
        </div>
        <div className={styles.grid}>
        <a
            href="https://www.niletrade.xyz/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              NileTrade <span>-&gt;</span>
            </h2>
            <p>Junior capstone project. Developed a full-stack web app 
              with five other students mocking Amazon&apos;s website. Feel free to explore, make an account,
              or even check out as a guest! To use the test Stripe, the card number is 4242 4242 4242 4242
              with any expiration and CVV. </p>
          </a>
          <a
            href="https://zokamou.github.io/Wind-Up/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Wind-Up <span>-&gt;</span>
            </h2>
            <p>Endless runner game created using JavaScript and the Phaser library.</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=XoTbfHAu6jk"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Full-Stack Slack Web App <span>-&gt;</span>
            </h2>
            <p>Web app modeled after Slack using JavaScript, React, Express.js, Node.js, SQL, and Postgres.
              (Click to be directed to a YouTube demonstration, as the repository for this project is private.)
            </p>
          </a>
          <a
            href="https://keatonshawhan.github.io/Dig_Champs/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Dig Champs <span>-&gt;</span>
            </h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Level-based game inspired by "Dig Champs," from TV show
              {/* eslint-disable-next-line react/no-unescaped-entities */} 
              "Regular Show", using JavaScript and the Phaser library.
            </p>
          </a>
          <a
            href="https://zokamou.github.io/Rocket-Patrol-Mods/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Rocket Patrol <span>-&gt;</span>
            </h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Arcade shooter game based on "Rocket Patrol" (1978) using JavaScript and the Phaser library.
            </p>
          </a>
        
        </div>
        
      </div>
    </main>
  );
}
