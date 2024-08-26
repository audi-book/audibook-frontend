import React from 'react';
import './about.css'
import { Box, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Container maxWidth="md" className="about-container">
      <Typography variant="h4" gutterBottom align="center" className='topic'>
        About Us
      </Typography>

      <Typography variant="h5" gutterBottom className='sub-topic'>
        Welcome to AudiBook at the Faculty of Technology, University of Sri Jayewardenepura
      </Typography>
      <Typography variant="body1" paragraph>
        At the Faculty of Technology, University of Sri Jayewardenepura, we take pride in providing a streamlined and user-friendly platform for reserving our state-of-the-art facilities. Whether you are planning a lecture, seminar, special event, or community gathering, AudiBook ensures a hassle-free booking experience, tailored to meet your needs.
      </Typography>

      <Typography variant="h5" gutterBottom className='sub-topic'>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        AudiBook is designed to facilitate the smooth and efficient reservation of our auditorium, a space that is integral to both academic and cultural activities within and beyond our university community. We aim to support a wide range of events that enrich the lives of faculty members, students, and the broader community.
      </Typography>

      <Typography variant="h5" gutterBottom className='sub-topic'>
        Who Can Use AudiBook?
      </Typography>
      <Typography variant="body1" paragraph>
        We are proud to offer our auditorium not only to the faculty and students of the University of Sri Jayewardenepura but also to external parties. Whether you are an academic professional, a student group, or an external organization, AudiBook makes it easy to reserve our facilities for your next event.
      </Typography>

      <Typography variant="h5" gutterBottom className='sub-topic'>
        What We Offer
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Ease of Use" 
          secondary="Our platform is designed to be intuitive and straightforward, making the booking process as simple as possible."
          classes={{ primary: 'primaryText' }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Flexibility" 
          secondary="We accommodate a variety of events, ensuring that your needs are met, whether for an academic lecture, a cultural seminar, or a community gathering."
          classes={{ primary: 'primaryText' }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Support" 
          secondary="Our team is dedicated to assisting you throughout the booking process, ensuring that your event runs smoothly."
          classes={{ primary: 'primaryText' }} />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom className='sub-topic'>
        Get in Touch
      </Typography>
      <Typography variant="body1">
        We are here to support you every step of the way. If you have any questions or need assistance with your booking, please don&apos;t hesitate to contact us.

      </Typography>
    </Container>
  );
};

export default AboutUs;
