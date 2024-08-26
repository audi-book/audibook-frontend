"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Card from "react-bootstrap/Card";
import { styled } from "@mui/material/styles";
import { Typography, CircularProgress } from "@mui/material";
import { useGetAllEventsQuery } from "../../../../../redux/features/auth/eventApi";

const CustomCard = styled(Card)({
  border: "none",
  borderRadius: "1rem",
  backgroundColor: "var(--light-grey) !important",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  padding: "10px",
});

const Upcomingevents = () => {
  const { data: eventData, isLoading, error } = useGetAllEventsQuery({});

  const rows =
    eventData?.data
      .filter(
        (event: any) =>
          event.status === "Approved" && new Date(event.eventDate) > new Date()
      )
      .map((event: any) => ({
        id: event.id,
        name: event.eventName,
        date: new Date(event.eventDate).toLocaleDateString(),
        StartTime: event.startTime,
        status: event.status,
      })) || [];

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <CustomCard className="stat-card">
      <Typography variant="h5" component="div">
        Upcoming Events
      </Typography>
      <br />
      <Box
        sx={{
          height: 400,
          width: "100%",
          overflow: "auto",
          "@media (max-width:600px)": {
            width: "100%",
            overflowX: "auto",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={[
            { field: "name", headerName: "Event Name", flex: 1 },
            { field: "date", headerName: "Date", flex: 1 },
            { field: "StartTime", headerName: "Start Time", flex: 1 },
            { field: "status", headerName: "Status", flex: 1 },
          ]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </CustomCard>
  );
};

export default Upcomingevents;
