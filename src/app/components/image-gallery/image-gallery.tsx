'use client';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme, useMediaQuery, Box, Dialog, DialogContent } from '@mui/material';

function srcset(image: string, size: number) {
  return {
    src: `${image}?w=${size}&h=${size}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size}&h=${size}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function GalleryImageList() {
  const theme = useTheme();

  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const cols = isExtraSmallScreen ? 2 : isSmallScreen ? 3 : isMediumScreen ? 4 : 5;

  const width = isExtraSmallScreen ? '95vw' : isSmallScreen ? '90vw' : isMediumScreen ? '85vw' : '80vw';
  const itemSize = parseFloat(width) / cols; 
  const itemSizeWithUnit = `${itemSize}px`; 

  // State for the dialog
  const [open, setOpen] = React.useState<boolean>(false);
  const [currentImage, setCurrentImage] = React.useState<string | null>(null);

  const handleClickOpen = (img: string) => {
    setCurrentImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        overflow: 'scroll',
        padding: '2rem',
      }}
    >
      <ImageList
        sx={{
          width: width,
          height: 'auto',
          margin: '0 auto',
          overflow: 'auto',
        }}
        variant="quilted"
        cols={cols}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={1}
            rows={1}
            sx={{
              position: 'relative',
              cursor: 'pointer', 
            }}
            onClick={() => handleClickOpen(item.img)} 
          >
            <img
              {...srcset(item.img, parseFloat(itemSizeWithUnit))}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="image-dialog"
      >
        <DialogContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
          }}
        >
          {currentImage && (
            <img
              src={currentImage}
              alt="Current Image"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}


const itemData = [
  { img: './Auditorium gallery/ag01.jpg', title: 'ag01.jpg' },
  { img: './Auditorium gallery/ag02.png', title: 'ag02.png' },
  { img: './Auditorium gallery/ag03.png', title: 'ag03.png' },
  { img: './Auditorium gallery/ag04.jpg', title: 'ag04.jpg' },
  { img: './Auditorium gallery/ag05.jpg', title: 'ag05.jpg' },
  { img: './Auditorium gallery/ag06.jpg', title: 'ag06.jpg' },
  { img: './Auditorium gallery/ag07.jpg', title: 'ag07.jpg' },
  { img: './Auditorium gallery/ag08.jpg', title: 'ag08.jpg' },
  { img: './Auditorium gallery/ag09.jpg', title: 'ag09.jpg' },
];
