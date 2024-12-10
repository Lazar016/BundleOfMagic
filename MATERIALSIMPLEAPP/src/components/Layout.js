// src/components/Layout.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navigacija */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Moja Aplikacija
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Početna
          </Button>
          <Button color="inherit" component={Link} to="/about">
            O Nama
          </Button>
        </Toolbar>
      </AppBar>

      {/* Glavni sadržaj */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
