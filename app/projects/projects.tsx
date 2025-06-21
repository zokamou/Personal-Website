import React from 'react';
import { Box } from '@mui/material';
import ProjectCard from './projectCard';

import niletrade_image from '../assets/niletrade.png';
import windup_image from '../assets/windup.png';
import slack_image from '../assets/slack.png'
import dig_image from '../assets/dig_image.png'
import rocket_image from '../assets/rocket.png'
import ss_image from '../assets/ss.png'
import niletrade2 from '../assets/niletrade img2.png'
import niletrade3 from '../assets/niletrade img3.png'
import niletrade4 from '../assets/niletrade img4.png'
import ss1 from '../assets/ss1.png'
import ss2 from '../assets/ss2.png'
import ss3 from '../assets/ss3.png'
import ss4 from '../assets/ss4.png'
import windup1 from '../assets/windup1.png'
import dc1 from '../assets/dc1.png'
import dc2 from '../assets/dc2.png'
import dc3 from '../assets/dc3.png'
import rp1 from '../assets/rp1.png'
import rp2 from '../assets/rp2.png'
import ll0 from '../assets/ll0.png'
import ll1 from '../assets/ll1.png'
import ll2 from '../assets/ll2.png'
import ll3 from '../assets/ll3.png'
import ll4 from '../assets/ll4.png'


const Projects = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, margin: "10px"}}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, minWidth: "200px"}}>
        <ProjectCard
          title="NileTrade"
          description="NileTrade was a junior capstone project. I developed a full-stack web app with five other students mocking Amazon's website. We primarily used React, TypeScript, and PostgreSQL to create the site. Feel free to explore, make an account, or even check out as a guest! To use the test Stripe, the card number is 4242 4242 4242 4242 with any expiration and CVV."
          link="https://www.niletrade.xyz/"
          images={[niletrade_image, niletrade2, niletrade3, niletrade4]}
        />
         <ProjectCard
          title="Liar Liar"
          description="Liar Liar is a multiplayer, problem-solving, mystery game made in Unity. Players must find who cursed the town of Emberwell by talking to townsfolk and deciphering their riddles. I created all of the assets as well as worked on a significant portion of gameplay."
          link="https://www.youtube.com/watch?v=ygHypQv27Vg"
          images={[ll0, ll1, ll2, ll3, ll4]}
        />
        <ProjectCard
          title="SharedSpoons"
          description="SharedSpoons is an IOS mobile app that was created with five other students. It is a social media platform that allows users to log and share dishes they have tried. We primarily used React Native, TypeScript, and PostgreSQL to develop the app. (Click to be directed to a YouTube demonstration, as the project is not published.)"
          link="https://www.youtube.com/watch?v=UijZYShK61Y"
          images={[ss_image, ss1, ss2, ss3, ss4]}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap:4}}>
        <ProjectCard
          title="WindUp"
          description="Endless runner game created using JavaScript and the Phaser library."
          link="https://zokamou.github.io/Wind-Up/"
          images={[windup_image, windup1]}
        />
        <ProjectCard
          title="Dig Champs"
          description="Level-based game inspired by 'Dig Champs,' from TV show 'Regular Show', using JavaScript and the Phaser library."
          link="https://keatonshawhan.github.io/Dig_Champs/"
          images={[dig_image, dc1, dc2, dc3]}
        />
        <ProjectCard
          title="Rocket Patrol"
          description="Arcade shooter game based on 'Rocket Patrol' (1978) using JavaScript and the Phaser library."
          link="https://zokamou.github.io/Rocket-Patrol-Mods/"
          images={[rp1, rp2]}
        />
      </Box>
    </Box>
  );
};

export default Projects;
