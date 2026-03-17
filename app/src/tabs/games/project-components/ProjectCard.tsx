import React from 'react';
import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projectFrame from '../../../../assets/project-frame.png';

export default function ProjectCard({
  title,
  description,
  link,
  images,
}: {
  title: string;
  description: string;
  link: string;
  images: { src: string }[];
}) {
  const FRAME_WIDTH = 960; // px
  const FRAME_HEIGHT = 540; // px (16:9)

  // Fixed pixel positions/sizes for the content areas inside the frame
  const CONTENT_IMG = {
    top: -16, // nudge upward to eliminate visible top gap
    left: 48,
    width: 864,
    height: 520, // add extra height so crop can cover top edge
  } as const;

  const CONTENT_TEXT = {
    top: 76, // px from top inside the frame
    left: 560, // px from left inside the frame
    width: 360, // px text box width
  } as const;
  return (
    <Box
      sx={{
        position: 'relative',
        width: `${FRAME_WIDTH}px`,
        height: `${FRAME_HEIGHT}px`,
        margin: '16px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Carousel images behind frame */}
      <Box
        sx={{
          position: 'absolute',
          top: `${CONTENT_IMG.top}px`,
          left: `${CONTENT_IMG.left}px`,
          width: `${CONTENT_IMG.width}px`,
          height: `${CONTENT_IMG.height}px`,
          overflow: 'hidden',
          borderRadius: '8px',
          zIndex: 1,
        }}
      >
        <Box>
          <img
            src={images[0].src}
            alt={`${title} screenshot 1`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </Box>
      </Box>

      {/* Frame image on top of carousel */}
      <Box
        component="img"
        src={projectFrame}
        alt="Project Frame"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Text box on top-right of frame */}
      <Box
        sx={{
          position: 'absolute',
          top: `${CONTENT_TEXT.top}px`,
          left: `${CONTENT_TEXT.left}px`,
          width: `${CONTENT_TEXT.width}px`,
          textAlign: 'left',
          color: 'text.primary',
          zIndex: 3,
          fontFamily: 'Jersey 10, monospace',
        }}
      >
        <Typography variant="h3" sx={{ m: 0, fontSize: '32px', lineHeight: 1.1 }}>
          {title}
        </Typography>
        <Typography sx={{ m: 0, fontSize: '18px', lineHeight: 1.25 }}>{description}</Typography>
      </Box>
    </Box>
  );
}
