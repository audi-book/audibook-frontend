// 'use client';
// import './booking-form.css';
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// const defaultTheme = createTheme();

// export default function BookingForm() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Make Your Reservation
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             sx={{
//               mt: 3,
//               p: 3, // Padding inside the form
//               border: '1px solid #ccc', // Border style
//               borderRadius: 2, // Rounded corners
//               boxShadow: 3, // Add a subtle shadow for better visibility
//               width: '100%', // Make the form full width inside the container
//               backgroundColor: '#fff' // White background for the form
//             }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Name of the Requestor"
//               name="name"
//               autoComplete="current-name"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="position"
//               label="Position"
//               name="position"
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="event"
//               label="Event Name"
//               name="event"
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="event-des"
//               label="Event Description"
//               name="event-des"
//               multiline
//               rows={5} 
//             />
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DemoContainer components={['DatePicker']}>
//                 <Typography variant="subtitle1" marginTop={1}>
//                   Select Event Date
//                 </Typography>
//                 <DemoItem>
//                   <DatePicker defaultValue={dayjs('2022-04-17')} />
//                 </DemoItem>
//               </DemoContainer>
//             </LocalizationProvider>
//             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//               <Typography variant="subtitle1" marginTop={1}>
//                 Select Event Times
//               </Typography>
//               <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DemoContainer components={['TimePicker']}>
//                     <TimePicker label="Start Time" />
//                   </DemoContainer>
//                 </LocalizationProvider>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DemoContainer components={['TimePicker']}>
//                     <TimePicker label="End Time" />
//                   </DemoContainer>
//                 </LocalizationProvider>
//               </Box>
//             </Box>
//             <Button
//               className="btn"
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Submit Form
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }

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
          <Typography component="h1" variant="h5">
            Make Your Reservation
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              mt: 3,
              p: 3, // Padding inside the form
              border: '1px solid #ccc', // Border style
              borderRadius: 2, // Rounded corners
              boxShadow: 3, // Add a subtle shadow for better visibility
              width: '100%', // Make the form full width inside the container
              backgroundColor: '#fff' // White background for the form
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name of the Requestor"
              name="name"
              autoComplete="current-name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="position"
              label="Position"
              name="position"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="event"
              label="Event Name"
              name="event"
            />
            <TextField
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
                <Typography variant="subtitle1" marginTop={1}>
                  Select Event Date
                </Typography>
                <DemoItem>
                  <DatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle1" marginTop={1}>
                Select Event Times
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker']}>
                    <TimePicker label="Start Time" />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker']}>
                    <TimePicker label="End Time" />
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
