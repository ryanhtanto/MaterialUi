/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import {
  Typography, Stack, IconButton, Box,
} from '@mui/material';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FullWidthTabs from './tabContent';

export default function Detail() {
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          component="img"
          alt="logo company"
          sx={{ width: '15%', marginTop: '30px' }}
          src={`${process.env.PUBLIC_URL}/images/pinterest.png`}
        />
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          mt={5}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Pinterest
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
            Senior UI/UX Designer
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mt={5}
        >
          <Stack direction="row">
            <IconButton
              size="small"
              aria-label="maps"
              aria-controls="maps"
              aria-haspopup="true"
              color="text.secondary"
            >
              <LocationOnIcon />
            </IconButton>
            <Typography variant="subtitle1" color="text.secondary">
              California
            </Typography>
          </Stack>
          <Stack direction="row">
            <IconButton
              size="small"
              aria-label="maps"
              aria-controls="maps"
              aria-haspopup="true"
              color="text.secondary"
            >
              <MonetizationOnIcon />
            </IconButton>
            <Typography variant="subtitle1" color="inherit">
              $25,000
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              /Month
            </Typography>
          </Stack>
          <Stack direction="row">
            <IconButton
              size="small"
              aria-label="save"
              aria-controls="save"
              aria-haspopup="true"
              color="text.secondary"
            >
              <TurnedInNotIcon />
            </IconButton>
            <Typography variant="subtitle1" color="text.secondary">
              210 Saved
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <FullWidthTabs />
    </>
  );
}
