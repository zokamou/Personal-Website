import React from 'react';
import { Box, Typography } from '@mui/material';
import verticalFrame from '../../../../assets/vertical-frame.png';
import Carousel from 'react-material-ui-carousel';

export default function ProjectPoster({
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
  const FRAME_WIDTH = 400; // px
  const FRAME_HEIGHT = 400; // 2:3 aspect ratio

  const CONTENT_IMG = {
    top: 38,
    left: 20,
    width: 360,
    height: 500,
  } as const;

  const CONTENT_TEXT = {
    top: 275,
    left: 35, // px from left inside the frame
    width: 330, // px text box width
  } as const;

  return (
    <Box
      sx={{
        position: 'relative',
        width: `${FRAME_WIDTH}px`,
        height: `${FRAME_HEIGHT}px`,
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
        <Box
          sx={{
            width: '100%',
            height: '100%',
            '& .MuiPaper-root': { height: '100%' },
          }}
        >
          <Carousel
            indicators={true}
            interval={8000}
            animation="slide"
            navButtonsProps={{
              style: {
                backgroundColor: 'rgba(0,0,0,0.4)',
                color: 'white',
                borderRadius: '50%',
              },
            }}
          >
            {images.map((img, i) => (
              <Box key={i} sx={{ width: '100%', height: '100%' }}>
                <img
                  src={img.src}
                  alt={`${title} screenshot ${i + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    minWidth: '100%',
                    minHeight: '100%',
                    aspectRatio: '16 / 10', // enforce fixed aspect
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>

      {/* Frame image on top of carousel */}
      <Box
        component="img"
        src={verticalFrame}
        alt="Project Frame"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '500px',
          objectFit: 'contain',
          zIndex: 2,
          pointerEvents: 'none',
          display: 'block',
        }}
      />

      {/* Text box at bottom of frame */}
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
          transition: 'transform 0.2s ease',
          '&:hover .title': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
          },
        }}
        onClick={() => window.open(link, '_blank')}
      >
        <Typography
          className="title"
          variant="h3"
          sx={{
            m: 0,
            fontSize: '28px',
            lineHeight: 1.1,
            color: '#511e43',
            transition: 'transform 0.2s ease',
            display: 'inline-block',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ m: 0, fontSize: '20px', lineHeight: 1.1, color: '#333' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
