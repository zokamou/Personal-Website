import React from 'react';
import Image from 'next/image';
import profilePic from '../assets/profile_pic.jpg';
import styles from './projects.module.css';
import {Button, Box, Tabs, Tab, Typography} from '@mui/material';

const ProjectCard = ({ title, description, link }) => {
  return (
    <Box sx={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: '#f9f9f9',
    }}
    >
      <a
        href={link}
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          {title} <span>-&gt;</span>
        </h2>
        <p>
          {description}
        </p>
      </a>
    </Box>
  );
};

export default ProjectCard;
