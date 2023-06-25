import React from 'react';
import { Typography, Button, Stack, Box, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function Article() {
  return (
    <Box sx={{ width: '100%', maxWidth: 700 }}>
      <Typography variant="h3" gutterBottom>
        The Importance of Regular Exercise
      </Typography>
      <Box mb={2}>
        <Stack direction="row" spacing={2}>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Contained</Button>
          <IconButton>
            <AddIcCallIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box>
        <Stack display="block" direction="row" spacing={2}>
          <Button variant="text" color="primary">Text</Button>
          <Button variant="outlined" color="error"><DeleteOutlineIcon /></Button>
          <Button variant="contained" color="warning" startIcon={<DeleteIcon />}>Contained</Button>
        </Stack>
      </Box>
      <Typography variant="overline" display="block" gutterBottom>
        WRITER : RYAN HERTANTO
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        1. Physical Health Benefits:
      </Typography>
      <Typography variant="body2" gutterBottom>
        Regular exercise has numerous benefits for physical health. It helps in maintaining a healthy weight, improving cardiovascular health, and reducing the risk of chronic diseases such as heart disease, diabetes, and certain cancers. Exercise strengthens muscles and bones, enhances flexibility and balance, and boosts the immune system.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        2. Mental and Emotional Well-being:
      </Typography>
      <Typography variant="body2" gutterBottom>
        Exercise not only improves physical health but also has a significant impact on mental and emotional well-being. Engaging in physical activity releases endorphins, which are known as feel-good hormones, resulting in improved mood and reduced stress and anxiety. Regular exercise can also alleviate symptoms of depression and boost self-confidence.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        3. Cognitive Function and Brain Health:
      </Typography>
      <Typography variant="body2" gutterBottom>
        Studies have shown that exercise has a positive impact on cognitive function and brain health. Physical activity increases blood flow to the brain, promoting the growth of new neurons and improving memory, concentration, and overall cognitive abilities. Regular exercise is associated with a reduced risk of cognitive decline and age-related neurodegenerative diseases such as Alzheimer&apos;s.
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Article Made by ChatGPT
      </Typography>
    </Box>
  );
}
