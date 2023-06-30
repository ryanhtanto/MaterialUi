/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function JobDesc() {
  return (
    <Box sx={{ width: '100%' }}>
      <div>
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          Job Description
        </Typography>
        <Typography variant="body2" gutterBottom color="text.secondary">
          Senior UI/UX Designer needed, for collaborate with team and developer as full time designer. by having good communication skills,
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          Requirements
        </Typography>
        <ul>
          <li>
            <Typography variant="body2" gutterBottom color="text.secondary">
              On-site in California
            </Typography>
          </li>
          <li>
            <Typography variant="body2" gutterBottom color="text.secondary">
              Have good communication skills and team working skill.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" gutterBottom color="text.secondary">
              Know the principal of animation and you can create high quality prototypes.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" gutterBottom color="text.secondary">
              Figma, Xd & Sketch know about this app.
            </Typography>
          </li>
        </ul>

      </div>
    </Box>
  );
}
