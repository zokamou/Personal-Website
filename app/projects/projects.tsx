import React from 'react';
import { Box } from '@mui/material';
import ProjectCard from './projectCard';

import niletrade_image from '../assets/niletrade.png';
import windup_image from '../assets/windup.png';
import slack_image from '../assets/slack.png'
import dig_image from '../assets/dig_image.png'
import rocket_image from '../assets/rocket.png'
import ss_image from '../assets/ss.png'

const Projects = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, margin: "10px"}}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, minWidth: "200px"}}>
        <ProjectCard
          title="NileTrade"
          description="NileTrade was a junior capstone project. I developed a full-stack web app with five other students mocking Amazon's website. We primarily used React, TypeScript, and PostgreSQL to create the site. Feel free to explore, make an account, or even check out as a guest! To use the test Stripe, the card number is 4242 4242 4242 4242 with any expiration and CVV."
          link="https://www.niletrade.xyz/"
          image={niletrade_image}
        />
        <ProjectCard
          title="SharedSpoons"
          description="SharedSpoons is an IOS mobile app that was created with five other students. It is a social media platform that allows users to log and share dishes they have tried. We primarily used React Native, TypeScript, and PostgreSQL to develop the app. (Click to be directed to a YouTube demonstration, as the project is not published.)"
          link="https://www.youtube.com/watch?v=UijZYShK61Y"
          image={ss_image}
        />
        <ProjectCard
          title="WindUp"
          description="Endless runner game created using JavaScript and the Phaser library."
          link="https://zokamou.github.io/Wind-Up/"
          image={windup_image}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap:4}}>
        <ProjectCard
          title="Dig Champs"
          description="Level-based game inspired by 'Dig Champs,' from TV show 'Regular Show', using JavaScript and the Phaser library."
          link="https://keatonshawhan.github.io/Dig_Champs/"
          image={dig_image}
        />
        <ProjectCard
          title="Rocket Patrol"
          description="Arcade shooter game based on 'Rocket Patrol' (1978) using JavaScript and the Phaser library."
          link="https://zokamou.github.io/Rocket-Patrol-Mods/"
          image={rocket_image}
        />
        <ProjectCard
          title="Full-Stack Slack Web App"
          description="Web app modeled after Slack using JavaScript, React, Express.js, Node.js, SQL, and Postgres. (Click to be directed to a YouTube demonstration, as the project is not published.)"
          link="https://www.youtube.com/watch?v=XoTbfHAu6jk"
          image={slack_image}
        />
      </Box>
    </Box>
  );
};

export default Projects;
