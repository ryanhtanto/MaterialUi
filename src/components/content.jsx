/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import * as React from 'react';
import { Box, Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import JobCard from './jobCard';
import BasicTextFields from './Form';

export default function Content() {
  return (
    <>
      <BasicTextFields />
      <Box sx={{ width: '100%' }} mt={4}>
        <Stack direction="row" spacing={2}>
          <Typography variant="body1" fontWeight="bold" gutterBottom sx={{ flexGrow: 1 }}>
            Suggested Job
          </Typography>
          <Button size="medium" sx={{ textTransform: 'none' }}>See All</Button>
        </Stack>
        <JobCard />
      </Box>
    </>

  );
}
