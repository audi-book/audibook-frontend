'use client';
import './booking-form.css';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useCreateEventMutation } from '../../../../redux/features/auth/eventApi'; 
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../../../../redux/features/auth/authSlice'; 
import toast from 'react-hot-toast';

const defaultTheme = createTheme();

const BookingForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [createEvent, { isSuccess, isError, error }] = useCreateEventMutation();

  // Form state
  const [eventName, setEventName] = React.useState('');
  const [eventDescription, setEventDescription] = React.useState('');
  const [eventDate, setEventDate] = React.useState<Dayjs | null>(dayjs());
  const [startTime, setStartTime] = React.useState<Dayjs | null>(dayjs());
  const [endTime, setEndTime] = React.useState<Dayjs | null>(dayjs());

  const [userId, setUserId] = React.useState<number | null>(null);

  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  }, []);


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const eventData = {
      eventName,
      eventDate: eventDate?.format('YYYY-MM-DD'),
      startTime: startTime?.format('HH:mm'),
      endTime: endTime?.format('HH:mm'),
      userId,
    };

    try {
      await createEvent(eventData).unwrap();
      if (isSuccess) {
        toast.success("Event created successfully")
        dispatch(userLoggedOut());
        router.push('/');
      }
      if (isError) {
        if ("data" in error) {
          const errorData = error as any || "Event created error";
          toast.error(errorData?.data?.message);
        }
      }
    } catch (err) {
      console.error('Failed to create event:', err);
    }
  };

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
          <Typography className="topic">Make Your Reservation</Typography>
          <br />
          <Box
            className="box-outer"
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
              p: 3,
              border: '1px solid #ccc',
              borderRadius: 2,
              boxShadow: 3,
              width: '100%',
            }}
          >
            <TextField
              className="text-field"
              margin="normal"
              required
              fullWidth
              id="event"
              label="Event Name"
              name="event"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <TextField
              className="text-field"
              margin="normal"
              required
              fullWidth
              id="event-des"
              label="Event Description"
              name="event-des"
              multiline
              rows={5}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Typography variant="subtitle1" marginTop={1} className="topics">
                Select Event Date
              </Typography>
              <DatePicker
                value={eventDate}
                onChange={(newValue) => setEventDate(newValue)}
                className="text-field"
              />
            </LocalizationProvider>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle1" marginTop={1} className="topics">
                Select Event Times
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Start Time"
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    className="text-field"
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="End Time"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    className="text-field"
                  />
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
};

export default BookingForm;
