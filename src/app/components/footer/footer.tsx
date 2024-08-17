'use client';
import './footer.css';
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
    <Box component="footer" sx={{ bgcolor: 'black', color: 'white', p: 4, mt: 5 }}>
      <Grid container spacing={5}>

      <Grid item xs={15} sm={4} className='about-us'>
          <Typography variant="h6">About Us</Typography>
          <Typography mt={2}>
          The AUDIBOOK at the Faculty of Technology, University of Sri Jayewardenepura, 
          is designed to streamline the process of reserving our state-of-the-art facilities. 
          Whether you're planning a lecture, seminar, special event, or community gathering, our platform ensures 
          a hassle-free booking experience. We proudly offer our auditorium not only to faculty members and students but
           also to external parties, supporting both academic and cultural activities within and beyond our university community.
            Our mission is to provide transparency, efficiency, and convenience for all users.
          </Typography>
        </Grid>

        <Grid item xs={15} sm={4} className='centre-section'>
       
        <Box className="logo-container">
        <Box component="img" src="/audibooklogo.png" alt="Audiobook Logo" className="logo" />

         </Box>

          <Box className="follow-us">
            <Typography variant="h6">Follow Us</Typography>
          <Box mt={2}>
            <IconButton href="https://facebook.com" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} className='contact-us'>
          <Typography variant="h6">Contact Us</Typography>
          <Box mt={2}>
            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 1 }} />
              <Link href="mailto:contact@example.com" color="inherit" underline="none">
              dr@fot.sjp.ac.lk
              </Link>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography>+94 11 3 438 544</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography>Faculty of Technology,
                       University of Sri Jayewardenepura
                       Dampe – Pitipana Rd, Homagama</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={4}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Faculty of Technology. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
