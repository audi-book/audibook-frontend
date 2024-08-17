"use client";
import React, { useEffect, useState } from "react";
import MiniDrawer from "@/app/components/admin-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";
import PendingTable from "@/app/components/admin-dashboard/pending-events/pending-list/pending-list";
import SearchBox from "@/app/components/admin-dashboard/pending-events/search-box/search-box";

const Page: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser?.id);
      console.log(parsedUser?.id);
    }
  }, []);


  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer childTitle="Pending Reservations" />
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
        <PendingTable/>
      </Box>
    </Box>
  );
};

export default Page;
