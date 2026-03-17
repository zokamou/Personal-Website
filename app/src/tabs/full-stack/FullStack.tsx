import React from 'react';
import { Box, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';
import { PhaserGame } from '../../components/PhaserGame';
import GlobalNavbar from '../GlobalNavbar';
import { BlankScene } from '../../game/scenes/BlankScene';

export default function FullStack() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const projects = [
    {
      id: 'niletrade',
      imageKey: '/assets/niletrade1.png',
      title: 'NileTrade',
      description:
        "I developed a full-stack web app with five other students mocking Amazon's website. We primarily used React, TypeScript, and PostgreSQL to create the site. Feel free to explore, make an account, or even check out as a guest! To use the test Stripe, the card number is 4242 4242 4242 4242 with any expiration and CVV.",
      link: 'https://www.niletrade.xyz/',
    },
    {
      id: 'sharedspoons',
      imageKey: '/assets/ss-merged.png',
      title: 'SharedSpoons',
      description:
        'SharedSpoons is an IOS mobile app that was created with five other students. It is a social media platform that allows users to log and share dishes they have tried. We primarily used React Native, TypeScript, and PostgreSQL to develop the app. (Click to be directed to a YouTube demonstration, as the project is not published.)',
      link: 'https://youtu.be/ygHypQv27Vg?si=PuDALkLwmn7jsAi5&t=68',
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

              {/* --- 2. DESKTOP-ONLY BUTTON --- */}
              {!isMobile && (
                <Box
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    position: 'absolute',
                    zIndex: 4,
                    display: 'inline-block',
                    bottom: '16%',
                    right: '6%',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    '&:active': {
                      transform: 'scale(0.95)',
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
