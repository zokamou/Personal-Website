"use client";
import Image from 'next/image';
import profilePic from './assets/profile_pic.jpg'
import styles from "./page.module.css";
import React from 'react';
import { useState } from 'react';
import {Button, Box, Tabs, Tab, Typography} from '@mui/material';
import Profile from './profile/profile';
import Projects from './projects/projects';
import { pink } from '@mui/material/colors';

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event:React.SyntheticEvent, newValue:number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box className={styles.center}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { 
              backgroundColor: 'pink',
              transition: 'none',  
            },
          }}
          sx={{
            '& .MuiTabs-flexContainer': {
              transition: 'none', 
            },
          }}
        >
          <Tab
            label="Projects"
            sx={{
              color: 'black',
              fontSize: '16px',
              textTransform: 'none',
              transition: 'none',
              '&.Mui-selected': {
                color: 'pink',
                transition: 'none',

              },
            }}
          />
          <Tab
            label="Profile"
            sx={{
              color: 'black',
              fontSize: '16px',
              textTransform: 'none',
              transition: 'none',
              '&.Mui-selected': {
                color: 'pink',
                transition: 'none',

              },
              '& .MuiTab-root': {
                transition: 'none', 
              },
            }}
          />
        </Tabs>
      </Box>

      <Box sx={{ p: 3 }}>
        {value === 0 && (
          <Projects/>
        )}
        {value === 1 && (
          <Profile/>
        )}
      </Box>
    </Box>
  );
    
}
