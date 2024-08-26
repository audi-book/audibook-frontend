'use client';
import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'var(--brown)', 
        color: 'white', 
        p: { xs: 2, md: 4 }, 
        mt: 5 
      }} 
    >
      <Grid container spacing={3}>

        <Grid 
          item 
          xs={12} 
          sm={4} 
          sx={{
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
          >
            About Us
          </Typography>
          <Typography 
            mt={2} 
            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
          >
            The AudiBook at the Faculty of Technology, University of Sri Jayewardenepura, 
            is designed to streamline the process of reserving our state-of-the-art facilities. 
            Whether you're planning a lecture, seminar, special event, or community gathering, our platform ensures 
            a hassle-free booking experience. We proudly offer our auditorium not only to faculty members and students but
            also to external parties, supporting both academic and cultural activities within and beyond our university community.
          </Typography>
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={4} 
          sx={{ 
            textAlign: 'center' 
          }}
        >
          <Box>
            <Box 
              component="img" 
              src="/audibooklogo.png" 
              alt="Audiobook Logo" 
              sx={{ 
                height: { xs: 80, sm: 150 }, 
                width: { xs: 80, sm: 150 } 
              }} 
            />
          </Box>
          <Box mt={2}>
            <Typography 
              variant="h6" 
              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
            >
              Follow Us
            </Typography>
            <Box mt={1}>
              <IconButton href="https://facebook.com" color="inherit" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://linkedin.com" color="inherit" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={4} 
          sx={{
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
          >
            Contact Us
          </Typography>
          <Box mt={2}>
            <Box 
              display="flex" 
              alignItems="center" 
              justifyContent={{ xs: 'center', sm: 'left' }}
            >
              <EmailIcon sx={{ mr: 1 }} />
              <Link 
                href="mailto:contact@example.com" 
                color="inherit" 
                underline="none" 
                sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
              >
                dr@fot.sjp.ac.lk
              </Link>
            </Box>
            <Box 
              display="flex" 
              alignItems="center" 
              justifyContent={{ xs: 'center', sm: 'left' }}
              mt={1}
            >
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                +94 11 3 438 544
              </Typography>
            </Box>
            <Box 
              display="flex" 
              alignItems="center" 
              justifyContent={{ xs: 'center', sm: 'left' }}
              mt={1}
            >
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                Faculty of Technology,
                University of Sri Jayewardenepura
              </Typography>
            </Box>
          </Box>
        </Grid>

      </Grid>

      <Box textAlign="center" mt={4}>
        <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
          &copy; {new Date().getFullYear()} Faculty of Technology. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
