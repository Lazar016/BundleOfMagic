// src/pages/Home.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
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
        Naslov na početnoj stranici
      </Typography>
      <Button variant="contained" color="primary">
        Dugme na početnoj
      </Button>
    </Box>
  );
};

export default Home;
