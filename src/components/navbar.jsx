/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  AppBar, Button, IconButton, Stack, Toolbar, Typography,
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Navbar() {
  return (
    <div>
      <AppBar sx={{ width: '100%', left: 0, right: 0 }} position="relative">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <AcUnitIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI APP
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Feature</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}
