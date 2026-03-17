import React from 'react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-material-ui-carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({
  title,
  description,
  link,
  images,
}: {
  title: string;
  description: string;
  link: string;
  images: { src: string }[];
}) => {
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '16px',
        backgroundColor: '#f9f9f9',
        width: '33%',
        minWidth: '350px',
      }}
    >
      <Box>
        <Carousel autoPlay={false}>
          {images.map((image, index) => (
            <Box key={index}>
              <img
                src={image.src}
                alt={`${title} screenshot ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box sx={{ padding: '16px' }}>
        <a href={link} className={'project-link'} target="_blank" rel="noopener noreferrer">
          <h2>
            {title}{' '}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </h2>
          <p style={{ lineHeight: 1.5 }}>{description}</p>
        </a>
      </Box>
    </Box>
  );
};

export default ProjectCard;
