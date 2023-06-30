/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Activity() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="subtitle1" gutterBottom fontWeight="bold">
        Responsibilities
      </Typography>
      <ul>
        <li>
          <Typography variant="body2" gutterBottom color="text.secondary">
            Collaborate with product manager and teach throughout the design life-cycle such as product wireframes
          </Typography>
        </li>
        <li>
          <Typography variant="body2" gutterBottom color="text.secondary">
            Design new product, new interfaces and experience.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" gutterBottom color="text.secondary">
            Create a design theme that promotes a strong brand affiliation.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" gutterBottom color="text.secondary">
            Hands-on experience with creating short videos and editing
          </Typography>
        </li>
      </ul>
    </Box>
  );
}
