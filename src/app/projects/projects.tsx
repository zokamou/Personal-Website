import React from 'react';
import { Box } from '@mui/material';
import ProjectCard from './projectCard';

const Projects = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ProjectCard
        title="NileTrade"
        description="Junior capstone project. Developed a full-stack web app with five other students mocking Amazon's website. Feel free to explore, make an account, or even check out as a guest! To use the test Stripe, the card number is 4242 4242 4242 4242 with any expiration and CVV."
        link="https://www.niletrade.xyz/"
      />
      <ProjectCard
        title="WindUp"
        description="Endless runner game created using JavaScript and the Phaser library."
        link="https://zokamou.github.io/Wind-Up/"
      />
      <ProjectCard
        title="Full-Stack Slack Web App"
        description="Web app modeled after Slack using JavaScript, React, Express.js, Node.js, SQL, and Postgres. (Click to be directed to a YouTube demonstration, as the project is not published.)"
        link="https://www.youtube.com/watch?v=XoTbfHAu6jk"
      />
      <ProjectCard
        title="Dig Champs"
        description="Level-based game inspired by 'Dig Champs,' from TV show 'Regular Show', using JavaScript and the Phaser library."
        link="https://keatonshawhan.github.io/Dig_Champs/"
      />
      <ProjectCard
        title="Rocket Patrol"
        description="Arcade shooter game based on 'Rocket Patrol' (1978) using JavaScript and the Phaser library."
        link="https://zokamou.github.io/Rocket-Patrol-Mods/"
      />
    </Box>
  );
};

export default Projects;
