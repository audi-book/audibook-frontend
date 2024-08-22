'use client';
import * as React from 'react';
import Link from 'next/link';
import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Facility', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' }
];

function NavBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [buttonConfig, setButtonConfig] = React.useState({
    text: 'Book Now',
    href: '/user-signup'
  });

  React.useEffect(() => {
    // Check the current pathname to determine the button text and href
    const pathname = window.location.pathname;

    if (pathname === '/admin-login') {
      setButtonConfig({ text: 'Sign Up', href: '/admin-signup' });
    } else if (pathname === '/admin-signup') {
      setButtonConfig({ text: 'Log In', href: '/admin-login' });
    } else {
      setButtonConfig({ text: 'Book Now', href: '/user-signup' });
    }
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" passHref>
              <Avatar
                alt="AudiBook Logo"
                src="./LOGO.png"
                sx={{ display: 'flex', mr: 1 }}
              />
            </Link >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              AudiBook
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleCloseDrawer}
            >
              <Box
                sx={{ width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'var(--brown)'}}
                role="presentation"
                onClick={handleCloseDrawer}
              >
                <Avatar
                  alt="AudiBook Logo"
                  src="./LOGO.png"
                  sx={{ display: 'flex', my: 2 }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'var(--white)',
                    textDecoration: 'none',
                    textAlign: 'center',
                    my: 2,
                  }}
                >
                  AudiBook
                </Typography>
                <Divider />
                <List>
                  {pages.map((page) => (
                    <ListItem key={page.name} disablePadding>
                      <Link href={page.href} passHref>
                        <ListItemButton onClick={handleCloseDrawer} >
                          <ListItemText primary={page.name} sx={{ textAlign: 'center', color: 'white', textDecoration: 'none' }} className='textlist'/>
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
                <Link href={buttonConfig.href} passHref>
                  <Button
                    className='navbtn'
                    variant="contained"
                    sx={{ mt: 2, fontSize: '0.9rem' }}
                  >
                    {buttonConfig.text}
                  </Button>
                </Link>
              </Box>
            </Drawer>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Link key={page.name} href={page.href} passHref>
                <Button
                  onClick={handleCloseDrawer}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href={buttonConfig.href} passHref>
              <Button
                className='navbtn'
                variant="contained"
                sx={{ fontSize: '15px'}}
              >
                {buttonConfig.text}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
