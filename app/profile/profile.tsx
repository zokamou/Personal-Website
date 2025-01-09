"use client";
import Image from 'next/image';
import profilePic from '../assets/profile_pic.jpg';
import styles from "./profile.module.css";
import React from 'react';
import { useState } from 'react';
import { Button, Box, Tabs, Tab, Typography } from '@mui/material';

export default function Profile() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 4,
        }}
      >
        <Image
          style={{
            width: '400px',
            height: '500px',
            objectFit: 'cover',
            borderRadius: "8px"
          }}
          src={profilePic}
          alt="Profile Picture"
        />
        <Box className={styles.horizontal} sx={{padding:"10px"}}>
          <Typography sx={{fontSize: "48px", fontFamily: "Tahoma", fontWeight:"bold", paddingBottom:"10px", color: "#b82162"}}>
            Hello!
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              fontFamily: "Tahoma"
            }}
            className={styles.description}
          >
            My name is Zoe Feller, and I am a senior at UC Santa Cruz 
            studying Computer Science with a focus on game design and 
            full-stack web development. I have experience with programming 
            languages like JavaScript, TypeScript, Python, C, and C++, as 
            well as tools such as React, Node.js, PostgreSQL, Docker, and 
            GraphQL. Through coursework and personal projects, I have built 
            mobile and web applications, optimized databases, and created 
            functional user interfaces. I thrive in collaborative environments, 
            have experience working with Scrum and Agile methodologies, and 
            enjoy tackling challenges with a team-oriented approach. My tutoring 
            role at UC Santa Cruz further honed my ability to communicate complex 
            concepts and strengthened my problem-solving and critical thinking 
            skills. I’m eager to bring my technical expertise, creativity, and 
            enthusiasm to an internship or entry-level role, where I can continue 
            to grow as a developer and contribute to impactful projects.
            <br></br><br></br>
            <strong>Programming Languages</strong>: JavaScript, TypeScript, React, React Native, Python, C, C++,  GraphQL, SQL, Haskell
            <br></br><br></br>
            <strong>Additional Tools</strong>: Node.js, Next, PostgreSQL, Docker, AWS, TSOA, Swagger, Express, Vite, Nginx, Namecheap, Jest, Construct, Unity, Unreal Engine, PureData, Git, VS Code, Autodesk Inventor, Linux Ubuntu, Vim

          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
