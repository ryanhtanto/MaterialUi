/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Box sx={{ width: '100%' }}>
      <div>
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          About Pinterest
        </Typography>
        <Typography variant="body2" gutterBottom color="text.secondary">
          Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more.
        </Typography>
        <Typography variant="body2" gutterBottom color="text.secondary">
          With billions of Pins on Pinterest, you will always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find. You can also create Pins to share your ideas with other people on Pinterest.
        </Typography>
        <Typography variant="body2" gutterBottom color="text.secondary">
          You have to meet minimum age requirements to sign up, and we have certain protections in place for teens. Learn more about teen safety on Pinterest .
        </Typography>
      </div>
    </Box>
  );
}
