import React from 'react';
import { Box, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';
import { PhaserGame } from '../../components/PhaserGame';
import GlobalNavbar from '../GlobalNavbar';
import { BlankScene } from '../../game/scenes/BlankScene';

export default function AboutMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          <Box
            sx={{
              position: 'relative',
              width: '90%',
              maxWidth: isMobile ? '500px' : '1000px',
              aspectRatio: isMobile ? '500 / 800' : '1000 / 600',
            }}
          >
            <Box
              component="img"
              src={'/assets/about-me.png'}
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
                top: isMobile ? '51%' : '5%',
                left: isMobile ? '13%' : '46%',
                width: isMobile ? '75%' : '50%',
                height: isMobile ? '35%' : '50%',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Jersey 10", monospace',
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  color: '#9a384a',
                  mb: 0.5,
                  lineHeight: 1,
                }}
              >
                About Me
              </Typography>

              <Typography
                variant="body1"
                sx={(theme) => ({
                  fontSize: '1.4rem',
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '1.5rem',
                  },
                  [theme.breakpoints.up('md')]: {
                    fontSize: '1.3rem',
                  },
                  [theme.breakpoints.up('lg')]: {
                    fontSize: '1.5rem',
                  },
                  color: '#000000',
                  lineHeight: 1.1,
                  mb: 1,
                })}
              >
                Hi, I’m Zoe! I’m currently a full-stack developer at Revenaut AI. Throughout my
                career, I’ve worked across full-stack web development, games, and mobile
                applications, and I enjoy building and contributing to end-to-end products. My
                background in game design influences how I approach development. I focus on making
                things feel clear, responsive, and easy to use. Outside of coding, I enjoy crafts,
                video games, and spending time outdoors!
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Jersey 10", monospace',
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  color: '#9a384a',
                  mb: 0.5,
                  lineHeight: 1,
                }}
              >
                Contact Me
              </Typography>

              <Typography
                variant="body1"
                sx={(theme) => ({
                  fontSize: '1.4rem',
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '1.5rem',
                  },
                  [theme.breakpoints.up('md')]: {
                    fontSize: '1.3rem',
                  },
                  [theme.breakpoints.up('lg')]: {
                    fontSize: '1.5rem',
                  },
                  color: '#000000',
                  lineHeight: 1.1,
                  mb: 1,
                })}
              >
                Email: zoefellerr07@gmail.com
                <br />
                Phone: (310) 357-6013
                <br />
                LinkedIn: linkedin.com/in/zoe-feller
                <br />
                GitHub: github.com/zokamou
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                px: { xs: 2, md: 3 },
                py: { xs: 2, md: 2 },
                top: isMobile ? '70%' : '55%',
                left: isMobile ? '13%' : '4%',
                width: isMobile ? '75%' : '40%',
                height: isMobile ? '20%' : '25%',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Jersey 10", monospace',
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  color: '#9a384a',
                  mb: 0.5,
                  lineHeight: 1,
                }}
              >
                Skills
              </Typography>

              <Typography
                variant="body1"
                sx={(theme) => ({
                  fontSize: '1.4rem',
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '1.5rem',
                  },
                  [theme.breakpoints.up('md')]: {
                    fontSize: '1.3rem',
                  },
                  [theme.breakpoints.up('lg')]: {
                    fontSize: '1.5rem',
                  },
                  color: '#000000',
                  lineHeight: 1.1,
                })}
              >
                JavaScript/TypeScript, Java, Python, C/C++/C#, React, React Native, Spring Boot,
                GraphQL, Unity, Docker, AWS, GCP
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
