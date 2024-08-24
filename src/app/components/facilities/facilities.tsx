// Facilities.tsx
'use client';
import React from 'react';
import './Facilities.css';
import { Box, Grid, Typography } from '@mui/material';

const facilities = [
  {
    name: 'High-Quality Sound System',
    description: 'Our auditorium is equipped with a state-of-the-art sound system that ensures clear and powerful audio for any event.',
    image: '/images/sound.jpg',
  },
  {
    name: 'Modern Lighting',
    description: 'The auditorium features modern lighting that can be adjusted to suit the mood and needs of any event.',
    image: '/images/lighting.jpg',
  },
  {
    name: 'Spacious Seating',
    description: 'With a capacity to seat over 500 people, our auditorium provides comfortable and spacious seating arrangements.',
    image: '/images/seating.jpg',

  },

  {
    name: 'Spacious Stage',
    description: 'A large, well-equipped stage suitable for performances, presentations, and ceremonies, often with curtains, wings, and backstage access.',
    image: '/images/stage.jpg',
  },
  {
    name: 'Dressing Rooms',
    description: 'Private rooms behind or near the stage for performers to prepare, rest, and store costumes and props before and during events.',
    image: '/images/Dressing.jpg',
  },
  {
    name: 'Control Room',
    description: 'A dedicated area for managing sound, lighting, and video equipment, often located at the back of the auditorium for optimal viewing and control.',
    image: '/images/control.jpg',
  },
];

const Facilities: React.FC = () => {
  return (
    <Box className="facilities-container">
      <Typography variant="h4" className="facilities-title">
        Facilities Provided by Our Auditorium
      </Typography>
      <Grid container spacing={4} className="facilities-grid">
        {facilities.map((facility, index) => (
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            key={index}
            className={`facility-item ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
            alignItems="center"
          >
            <Grid item xs={12} sm={6} className="facility-image-container">
              <img src={facility.image} alt={facility.name} className="facility-image" />
            </Grid>
            <Grid item xs={12} sm={6} className="facility-description-container">
              <Typography variant="h5" className="facility-name">
                {facility.name}
              </Typography>
              <Typography variant="body1" className="facility-description">
                {facility.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Facilities;
