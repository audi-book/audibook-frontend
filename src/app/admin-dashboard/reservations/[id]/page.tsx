"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/admin-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import ProfileStats from "@/app/components/admin-dashboard/profile-stats/stat";
import AccountInformationForm from "@/app/components/admin-dashboard/account-info/account-info";

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
//   const { data: mentor, isLoading, refetch } = useGetMentorByIdentityQuery(userId,
//     { refetchOnMountOrArgChange: true });

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="All Reservations" />
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
        <ProfileStats/>
        <AccountInformationForm/>
      </Box>
    </Box>
  );
};

export default Page;
