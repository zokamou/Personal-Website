"use client";
import Image from 'next/image';
import profilePic from '../assets/profile_pic.jpg';
import styles from "./profile.module.css";
import React from 'react';
import { useState } from 'react';
import { Button, Box, Tabs, Tab, Typography, Icon, IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
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
        <Box sx={{display:"flex", flexDirection: "column"}}>
          <Image
            style={{
              width: '400px',
              height: '500px',
              objectFit: 'cover',
              borderRadius: "8px",
              marginBottom:"40px"
            }}
            src={profilePic}
            alt="Profile Picture"
          />
          <Box sx={{display:"flex", flexDirection: "row", justifyContent:"center"}}>
            <a href="https://www.linkedin.com/in/zoe-feller/" target="_blank" rel="noopener noreferrer" style={{color: 'black', textDecoration:'none'}}>
              <Box sx={{display:"flex", flexDirection:"row"}}>
                  <LinkedIn sx={{color: '#575757', scale: "1.3"}}/>
                  <Typography sx={{marginLeft: "10px", fontFamily: "Tahoma", color: '#575757', textDecoration:'none', fontSize:"18px"}}>
                    LinkedIn
                  </Typography>
              </Box>
            </a>
            <a href="https://github.com/zokamou" target="_blank" rel="noopener noreferrer" style={{color: 'black', textDecoration:'none'}}>
              <Box sx={{marginLeft: "50px", display:"flex", flexDirection:"row"}}>
                  <GitHub sx={{color: '#575757', scale: "1.3"}}/>
                  <Typography sx={{marginLeft: "10px", fontFamily: "Tahoma", color: '#575757', textDecoration:'none', fontSize:"18px"}}>
                    Github
                  </Typography>
              </Box>
            </a>
          </Box>
        </Box>
        <Box className={styles.horizontal} sx={{padding:"10px"}}>
          <Typography sx={{fontSize: "48px", fontFamily: "Tahoma, Arial, sans-serif", fontWeight:"bold", paddingBottom:"10px", color: "#b82162"}}>
            Hello!
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              fontFamily: "Tahoma, Arial, sans-serif"
            }}
            className={styles.description}
          >
            Hello! My name is Zoe Feller, and I recently graduated with a B.S. 
            in Computer Science: Game Design and a Minor in Computer Science 
            from the University of California Santa Cruz.
            <br></br><br></br>
            I have always been compelled to combine creativity with education and
            development. One of my favorite things about being in the Computer Science
            field is getting to see my solutions come to life. There’s something
            incredibly rewarding about seeing my code evolve into interactive experiences
            that people can actually play and enjoy. I discovered my love for programming
            through the excitement of building games and experimenting with new 
            technologies, watching how abstract logic and systems could generate 
            fun, engaging outputs. 
            <br></br><br></br>

            That same creative spark led me to explore other areas of development, 
            including system design, database architecture, and full-stack development. 
            I’ve built everything from simple websites for friends and family to complex 
            web and mobile applications using tools like React, TypeScript, different APIs,
            PostgreSQL, and AWS. 
            <br></br><br></br>
            One of the things I value most in any field is creativity. It’s not just about 
            writing code, it’s about solving problems in new ways, designing user experiences 
            that matter, and building things that people enjoy using. I play games, I study 
            how they work, and now, I get to create them. Being part of that process, turning 
            ideas into something playable and meaningful, is what motivates me to continue 
            making things I enjoy.
            <br></br><br></br>
            <strong>Programming Languages</strong>: JavaScript, TypeScript, React, React Native, C, C#, C++,  Python, GraphQL, SQL
            <br></br><br></br>
            <strong>Additional Tools</strong>: Unity, PostgreSQL, Express, Node.js, Vite, Nginx,  Next, Docker, AWS, TSOA, Swagger, Namecheap, Jest, Construct, PureData, Git, VS Code, Autodesk Inventor, Linux Ubuntu, Vim
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
