"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/admin-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import ProfileStats from "@/app/components/admin-dashboard/profile-stats/stat";
import AccountInformationForm from "@/app/components/admin-dashboard/account-info/account-info";
import { useGetUserByIdQuery } from "../../../../../redux/features/auth/userApi";
import { CircularProgress } from "@mui/material";

const Page: React.FC = ({ params }: any) => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
      console.log(parsedUser?.id);
    }
  }, []);
  const { data: user, isLoading, isError, error } = useGetUserByIdQuery(userId, {
    skip: userId === 0,
  });

  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="Reservation Details" user={user}/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: 7,
          '@media (max-width: 600px)': {
            width: 320,
          },
        }}
      >
        <ProfileStats eventId={params.id}/>
      </Box>
    </Box>
  );
};

export default Page;
