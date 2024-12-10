// src/pages/About.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Za centriranje u celom ekranu
        textAlign: 'center', // Centriranje teksta
      }}
    >
      <Typography variant="h3" gutterBottom>
        O Nama
      </Typography>
      <Button variant="contained" color="primary">
        Dugme o nama
      </Button>
    </Box>
  );
};

export default About;
