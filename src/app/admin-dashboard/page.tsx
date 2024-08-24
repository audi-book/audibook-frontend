'use client';
import { Box, Grid, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MiniDrawer from '../components/admin-dashboard/side-nav/sidenav'; 
import StatsRow from '../components/admin-dashboard/stat-row/statrow';
import Upcomingevents from '../components/admin-dashboard/upcoming-events/upcomingevents';
import { useGetUserByIdQuery } from '../../../redux/features/auth/userApi'; 

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  }, []);

  const { data: user, isLoading, isError, error } = useGetUserByIdQuery(userId, {
    skip: userId === 0,
  });

  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer childTitle="Dashboard" user={user}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8 }}>
        {user && (
          <StatsRow organizationId={user.id} /> 
        )}
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Upcomingevents />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
