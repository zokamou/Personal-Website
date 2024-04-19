import Image from 'next/image';
import profilePic from "./assets/profile_pic.jpg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.outline}>
      <h2 className={styles.header}>Zoe Feller - Projects</h2>
      <div className={styles.main}>
        <div className={styles.pfpLayout}>
          <Image className={styles.pfp} src={profilePic} alt="pfp" />
          <p className={styles.description}>Hello! My name is Zoe Feller and I am a junior at
          UC Santa Cruz. I am studying Computer Science Game Design with a minor in Compouter Science.
          I am extremely passionate about game design and full-stack web development. Here are a few of the projects
          I have worked on in the past year, enjoy!
          </p>
        </div>
        <div className={styles.grid}>
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
            <p>Level-based game inspired by "Dig Champs," from TV show 
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
            <p>Arcade shooter game based on "Rocket Patrol" (1978) using JavaScript and the Phaser library.
            </p>
          </a>
        
        </div>
        
      </div>
    </main>
  );
}
