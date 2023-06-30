/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import * as React from 'react';
import {
  Card, Box,
} from '@mui/material';
import CardContents from './cardContent';

export default function JobCard() {
  return (
    <Box sx={{ '& > *': { mt: 2 } }}>
      <Card>
        <CardContents />
      </Card>
      <Card>
        <CardContents />
      </Card>
      <Card>
        <CardContents />
      </Card>
    </Box>

  );
}
