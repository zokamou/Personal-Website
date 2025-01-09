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
          }}
          src={profilePic}
          alt="Profile Picture"
        />
        <Box className={styles.horizontal} sx={{padding:"10px"}}>
          <Typography className={styles.description} sx={{fontSize: "48px", fontWeight:"bold", paddingBottom:"30px", color: "#b82162"}}>
            Hello!
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              //textAlign: { xs: 'center', sm: 'left' },
            }}
            className={styles.description}
          >
            My name is Zoe Feller and I am a senior at UC Santa Cruz.

            As a Computer Science student, I’m focused on developing practical 
            solutions in game design and full-stack web development. I have 
            experience with programming languages like JavaScript, TypeScript, 
            Python, C, and C++, and I’ve worked with tools such as React, Node.js, 
            PostgreSQL, Docker, and GraphQL. Through coursework and personal projects, 
            I’ve built applications from start to finish, including mobile apps with 
            React Native and web applications using APIs and microservices. I’ve 
            also worked on optimizing databases and creating clean, functional 
            user interfaces. I’m committed to building applications that are 
            user-friendly, efficient, and easy to maintain. I thrive in collaborative 
            environments and am dedicated to delivering high-quality, scalable 
            solutions. I enjoy the challenge of problem-solving and continuously 
            learning new technologies. As I look to expand my experience and 
            knowledge, I am excited to contribute to a team while furthering my 
            education and career in tech.
            <br></br><br></br>
            In addition to my technical skills, I work well in team environments 
            where collaboration and feedback are encouraged. I enjoy solving problems 
            and learning along the way, especially when I can work with others to find 
            solutions. As I continue to grow in my career, I’m eager to bring my skills 
            to a team where we can learn from one another. My tutoring experience at UC 
            Santa Cruz helped me improve my ability to explain complex technical 
            concepts clearly and strengthened my problem-solving and critical thinking 
            abilities. Throughout various projects, I have collaborated with multiple 
            teams, utilizing Scrum and Agile methodologies to ensure efficient 
            workflows and timely delivery of features. This experience has taught me 
            the importance of adaptability, communication, and continuous improvement 
            in project development.
            <br></br><br></br>
            I’m eager to bring my experience, creativity, and enthusiasm to an 
            internship or entry-level role where I can continue to grow as a developer 
            and contribute to impactful projects. With a genuine passion for technology 
            and an open mind to exploring new opportunities, I look forward to taking 
            the next step in my professional journey.

          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
