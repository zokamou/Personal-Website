import React from 'react';
import { Box, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';
import { PhaserGame } from '../../components/PhaserGame';
import GlobalNavbar from '../GlobalNavbar';
import { BlankScene } from '../../game/scenes/BlankScene';

export default function Games() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const projects = [
    {
      id: 'dig',
      imageKey: '/assets/dig1.png',
      title: 'Dungeon Inspection Guild',
      description:
        'Dungeon Inspection Guild is a top-down dungeon editor made in Unity. Players can create and share their own dungeons, as well as explore dungeons in story mode. I worked on player mechanics, level design, and overall gameplay.',
      link: 'https://store.steampowered.com/app/3715550/Dungeon_Inspection_Guild/',
    },
    {
      id: 'liarliar',
      imageKey: '/assets/ll1.png',
      title: 'Liar Liar',
      description:
        'Liar Liar is a multiplayer, problem-solving, mystery game made in Unity. Players must find who cursed the town of Emberwell by talking to townsfolk and deciphering their riddles. I created all of the assets as well as worked on a significant portion of gameplay.',
      link: 'https://youtu.be/ygHypQv27Vg?si=PuDALkLwmn7jsAi5&t=68',
    },
    {
      id: 'windup',
      imageKey: '/assets/windup1.png',
      title: 'Windup',
      description: 'Endless runner game created using JavaScript and the Phaser library.',
      link: 'https://zokamou.github.io/Wind-Up/',
    },
    {
      id: 'dig_champs',
      imageKey: '/assets/dc2.png',
      title: 'Dig Champs',
      description:
        "Level-based game inspired by 'Dig Champs,' from TV show 'Regular Show', using JavaScript and the Phaser library.",
      link: '',
    },
  ];

  return (
    <Box sx={{ position: 'fixed', inset: 0, overflow: 'hidden', bgcolor: '#511e43' }}>
      <PhaserGame scene={BlankScene} />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          zIndex: 10,
        }}
      >
        <Box sx={{ mb: 14 }}>
          <GlobalNavbar filled={true} />
        </Box>

        <Stack spacing={isMobile ? 4 : 3} alignItems="center" sx={{ pb: 10 }}>
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                position: 'relative',
                width: '90%',
                maxWidth: isMobile ? '500px' : '1000px',
                aspectRatio: isMobile ? '500 / 800' : '1000 / 400',
              }}
            >
              {/* --- 1. CLICKABLE THUMBNAIL (Mobile & Desktop) --- */}
              <Box
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'absolute',
                  zIndex: 1,
                  top: isMobile ? '8%' : '12%',
                  left: isMobile ? '11%' : '4%',
                  width: isMobile ? '80%' : '45%',
                  height: isMobile ? '40%' : '70%',
                  display: 'block',
                  // Added a subtle hover effect to indicate it is clickable
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={project.imageKey}
                  alt={`${project.title} gameplay`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                />
              </Box>

              <Box
                component="img"
                src={isMobile ? '/assets/pink-poster.png' : '/assets/project-frame.png'}
                alt="frame"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  px: { xs: 2, md: 3 },
                  py: { xs: 2, md: 2 },
                  top: isMobile ? '51%' : '10%',
                  left: isMobile ? '13%' : '46%',
                  width: isMobile ? '75%' : '50%',
                  height: isMobile ? '35%' : '50%',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Jersey 10", monospace',
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    color: '#9a384a',
                    mb: 0.5,
                    lineHeight: 1,
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={(theme) => ({
                    fontSize: '1.3rem',
                    [theme.breakpoints.up('sm')]: {
                      fontSize: '1.5rem',
                    },
                    [theme.breakpoints.up('md')]: {
                      fontSize: '1.2rem',
                    },
                    [theme.breakpoints.up(1050)]: {
                      fontSize: '1.5rem',
                    },
                    [theme.breakpoints.up('lg')]: {
                      fontSize: '1.5rem',
                    },
                    color: '#000000',
                    lineHeight: 1.1,
                    mb: 1,
                  })}
                >
                  {project.description}
                </Typography>
              </Box>

              {!isMobile && (
                <Box
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    position: 'absolute',
                    transform: 'scale(1.2)',
                    zIndex: 4,
                    display: 'inline-block',
                    bottom: '16%',
                    right: '6.5%',
                    transition: 'transform 0.2s ease',

                    '&:hover': {
                      transform: 'scale(1.25)',
                    },
                    '&:active': {
                      transform: 'scale(1.15)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/ViewProjectButton.png"
                    alt="View Project"
                    sx={{
                      width: '100px',
                      height: 'auto',
                      imageRendering: 'pixelated',
                      transition: 'transform 0.1s',
                    }}
                  />
                </Box>
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
