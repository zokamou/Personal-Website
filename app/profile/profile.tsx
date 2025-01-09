"use client";
import Image from 'next/image';
import profilePic from '../assets/profile_pic.jpg'
import styles from "./profile.module.css";
import React from 'react';
import { useState } from 'react';
import {Button, Box, Tabs, Tab, Typography} from '@mui/material';

export default function Profile() {
  const [value, setValue] = useState(0);

  const handleChange = (event:React.SyntheticEvent, newValue:number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <div className={styles.pfpLayout}>
          <Image className={styles.pfp} src={profilePic} alt="pfp" />
          <p className={styles.description}>
            Hello! <br /><br />
            My name is Zoe Feller, and I am a senior at UC Santa Cruz. I am studying Computer Science Game Design with a minor in Computer Science.
            I am extremely passionate about game design and full-stack web development. Here are a few of the projects I have worked on in the past year. <br /><br />
            Enjoy!
          </p>
        </div>
    </Box>
  );
}