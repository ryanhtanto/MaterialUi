/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 2 },
      }}
    >
      <TextField
        label="Search job, company etc"
        variant="outlined"
        sx={{ width: '100%' }}
      />
      <TextField
        label="Location"
        variant="outlined"
        sx={{ width: '100%' }}
      />
    </Box>
  );
}
