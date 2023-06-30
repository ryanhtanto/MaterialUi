/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import * as React from 'react';
import {
  CardActions, CardContent, Button, Typography, Stack, CardMedia, IconButton,
} from '@mui/material';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from 'react-router-dom';

export default function CardContents() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <CardMedia
          component="img"
          alt="logo company"
          sx={{ width: '15%' }}
          image={`${process.env.PUBLIC_URL}/images/pinterest.png`}
        />
        <Stack direction="column" sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Pinterest
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
            Senior UI/UX Designer
          </Typography>
        </Stack>
        <IconButton
          size="large"
          aria-label="save"
          aria-controls="save"
          aria-haspopup="true"
          color="text.secondary"
        >
          <TurnedInNotIcon />
        </IconButton>
      </Stack>
      <CardContent>
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
            California, Freelance ,WFO
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
        <Typography variant="body2" color="text.secondary">
          Senior UI/UX Designer needed, for collaborate with team and developer as full time designer. by having good communication skills,
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" component={Link} to="/detail" sx={{ width: '100%', marginTop: '10px', textTransform: 'none' }}>Apply Now</Button>
      </CardActions>
    </>
  );
}
