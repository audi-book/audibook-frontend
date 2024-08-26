// Facilities.tsx
'use client';
import * as React from 'react';
import './facilities.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <div className="imageListContainer">
      <ImageList className="imageList" sx={{ width: '100%', height: 'auto' }}>
    
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader className="listSubheader" component="div">Facilities provided by Our Auditorium </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} className="imageListItem">
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            className="imageListItemBar"
            title={item.title}
            subtitle={item.description}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
            sx={{
              title: {
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
              },
              subtitle: {
                fontSize: '1rem', 
                whiteSpace: 'normal', 
                  overflow: 'visible', 
              },
            }}
          />
        </ImageListItem>
      ))}
    </ImageList></div>
  );
}


const itemData = [

  {
    img: '/images/seating.jpg',
    title: 'Spacious Seating',
    description: 'With a capacity to seat over 500 people, our auditorium provides comfortable and spacious seating arrangements.',
  },
  {
    img: '/images/stage.jpg',
    title: 'Spacious Stage',
    description: 'A large, well-equipped stage suitable for performances, presentations, and ceremonies, often with curtains, and backstage.',
    rows: 2,
    cols: 3,
    featured: true,
  },
  
  
  {
    img: '/images/sound.jpg',
    title: 'High-Quality Sound System',
    description: 'Our auditorium is equipped with a state-of-the-art sound system that ensures clear and powerful audio for any event.',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/images/lighting.jpg',
    title: 'Modern Lighting',
    description: 'The auditorium features modern lighting that can be adjusted to suit the mood and needs of any event.',
  },
  
 
  {
    img: '/images/Dressing.jpg',
    title: 'Dressing Rooms',
    description: 'Private rooms behind or near the stage for performers to prepare, rest, and store costumes and props before and during events.',
    cols: 2,
  },
  {
    img: '/images/control.jpg',
    title: 'Control Room',
    description: 'A dedicated area for managing sound, lighting, and video equipment, located at the back of the auditorium for viewing and control.',
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];



