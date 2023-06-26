/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Content() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" spacing={2}>
        <Typography variant="body1" gutterBottom sx={{ flexGrow: 1 }}>
          Suggested Job
        </Typography>
        <Typography variant="body1" gutterBottom>
          See All
        </Typography>
      </Stack>
    </Box>
  );
}
