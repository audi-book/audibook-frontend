'use client';
import './booking-form.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const defaultTheme = createTheme();

export default function BookingForm() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography className='topic'>
            Make Your Reservation
          </Typography>
          <br/>
          <Box
            className='box-outer'
            component="form"
            noValidate
            sx={{
              mt: 3,
              p: 3, 
              border: '1px solid #ccc', 
              borderRadius: 2, 
              boxShadow: 3, 
              width: '100%', 
            }}
          >
            <TextField className='text-field'
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name of the Requestor"
              name="name"
              autoComplete="current-name"
              autoFocus
            />
            <TextField className='text-field'
              margin="normal"
              required
              fullWidth
              id="position"
              label="Position"
              name="position"
            />
            <TextField className='text-field'
              margin="normal"
              required
              fullWidth
              id="event"
              label="Event Name"
              name="event"
            />
            <TextField className='text-field'
              margin="normal"
              required
              fullWidth
              id="event-des"
              label="Event Description"
              name="event-des"
              multiline
              rows={5} 
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <Typography variant="subtitle1" marginTop={1} className='topics' >
                  Select Event Date
                </Typography>
                <DemoItem>
                  <DatePicker defaultValue={dayjs('2022-04-17')} className='text-field' />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle1" marginTop={1} className='topics' >
                Select Event Times
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker']}>
                    <TimePicker label="Start Time" className='text-field' />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker']}>
                    <TimePicker label="End Time" className='text-field' />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </Box>
            <Button
              className="btn"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Form
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
