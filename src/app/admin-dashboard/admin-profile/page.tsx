"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/admin-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import ProfileStats from "@/app/components/admin-dashboard/admin-profile/profile-stats/stat";
import AccountInformationForm from "@/app/components/admin-dashboard/admin-profile/account-info/account-info";
import PasswordSettingsForm from "@/app/components/admin-dashboard/admin-profile/psw-setting/psw-setting";
import { useGetUserByIdQuery } from "../../../../redux/features/auth/userApi"; 

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
    }
  }, []);

  const { data: userData, isLoading, error,refetch } = useGetUserByIdQuery(userId, {
    skip: !userId, 
    refetchOnMountOrArgChange: true
  });

  if (isLoading) {
    return <div>Loading user data...</div>;
  }


  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="Admin Profile" user={userData?.data?.name || ""} />
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
        <ProfileStats user={userData?.data} />
        <AccountInformationForm user={userData?.data} refetch={refetch} />
        <PasswordSettingsForm userId={userId} />
      </Box>
    </Box>
  );
};

export default Page;
