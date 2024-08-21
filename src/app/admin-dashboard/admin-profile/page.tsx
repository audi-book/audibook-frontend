"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/admin-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import ProfileStats from "@/app/components/admin-dashboard/admin-profile/profile-stats/stat";
import AccountInformationForm from "@/app/components/admin-dashboard/admin-profile/account-info/account-info";
import PasswordSettingsForm from "@/app/components/admin-dashboard/admin-profile/psw-setting/psw-setting";

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
      <MiniDrawer childTitle="Admin Profile" />
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
        <PasswordSettingsForm/>
      </Box>
    </Box>
  );
};

export default Page;
