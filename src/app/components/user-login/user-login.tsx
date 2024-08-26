"use client";
import './user-login.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useLoginMutation } from '../../../../redux/features/auth/authApi'; 

const defaultTheme = createTheme();

export default function UserSignIn() {
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      email: data.get('email') as string,
      password: data.get('password') as string,
    };

    try {
      await login(loginData).unwrap();
    } catch (err) {
      console.error('Failed to log in:', err);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Login successful");
      router.push("/booking"); 
    }
    if (isError) {
      if ("data" in error) {
        const errorData = (error as any) || "Login Error";
        toast.error(errorData?.data?.message || "Failed to log in. Please try again.");
      }
    }
  }, [isSuccess, isError, error, router]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography className='topic'>
        Log In
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField className='text-field'
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField className='text-field'
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              className="btn"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/user-signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
