"use client";
import React, { useEffect, useState } from "react";
// import MiniDrawer from "@/app/components/dashboard/faculty-dashboard/side-nav/sidenav";
import Box from "@mui/material/Box";

 


import ReservationTable from "@/app/components/admin-dashboard/reservation-list/reservation-list";
import SearchBox from "@/app/components/admin-dashboard/search-box/search-box";

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
        <ReservationTable/>
      </Box>
    </Box>
  );
};

export default Page;
