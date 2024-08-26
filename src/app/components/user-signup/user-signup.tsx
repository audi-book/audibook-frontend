 "use client"
import { useRegisterMutation } from '../../../../redux/features/auth/authApi'; 
import './user-signup.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const defaultTheme = createTheme();

type RegistrationData = {
  name: string;
  email: string;
  contact: string;
  password: string;
  role: string;
};

export default function UserSignUp() {
  const [register, { isLoading, isSuccess, isError, error }] = useRegisterMutation();
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const registrationData: RegistrationData = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      contact: data.get('contact') as string,
      password: data.get('password') as string,
      role: 'USER', // Default role set to 'USER'
    };

    await register(registrationData).unwrap();
    }
  
    React.useEffect(() => {
      if (isSuccess) {
        toast.success("User sign up successful");
        router.push("/user-login");
      }
      if (isError) {
        if ("data" in error) {
          const errorData = (error as any) || "Registration Error";
          toast.error(errorData?.data?.message);
        }
      }
    }, [isSuccess, isError, error, router]);
  


  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography className='topic'>
        Sign Up
      </Typography>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className='form-outer'
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '16px', 
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'var(--brown)' }}>
            <AccountCircleIcon />
          </Avatar>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField className='text-field'
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField className='text-field'
                  required
                  fullWidth
                  id="contact"
                  label="Contact Number"
                  name="contact"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField className='text-field'
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField className='text-field'
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              className='btn'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/user-login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}