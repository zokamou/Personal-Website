import React from 'react';
import Image, { StaticImageData } from 'next/image';
import profilePic from '../assets/profile_pic.jpg';
import styles from './projects.module.css';
import {Button, Box, Tabs, Tab, Typography} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

const ProjectCard = ({ title, description, link, image }:{title:string, description:string, link:string, image:StaticImageData}) => {
  return (
    <Box sx={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '16px',
      backgroundColor: '#f9f9f9',
      width: "33%",
      minWidth: "350px"
    }}
    >
      <a
        href={link}
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box>
          <Image
            src={image}
            alt={title}
            style={{ borderTopRightRadius: '8px', borderTopLeftRadius: '8px', width: "100%", height: "250px" }}
          />
        </Box>
        <Box sx={{padding: "16px"}}>
        <h2>
          {title} <span><FontAwesomeIcon icon={faArrowRight} /></span>
        </h2>
        <p>
          {description}
        </p>
        </Box>
      </a>
    </Box>
  );
};

export default ProjectCard;
