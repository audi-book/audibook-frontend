'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import SearchBox from '../search-box/search-box';
import './pending-list.css';
import { useRouter } from 'next/navigation';

interface Reservation {
  id: number;
  eventName: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface ReservationIdProps {
}

const PendingTable: React.FC<ReservationIdProps> = () => {
  const [filteredRows, setFilteredRows] = useState<Reservation[]>([]);
  const router = useRouter();

  const handleViewClick = (id: number) => {
    router.push(`/admin-dashboard/pending-reservations/${id}`);
  };

  useEffect(() => {
    // Mock data for reservations
    const reservations: Reservation[] = [
     
      { id: 1, eventName: 'Annual Meeting', eventDate: '2024-09-01', startTime: '02:00 PM', endTime: '04:00 PM', status: 'Pending' },
    ];

    if (reservations.length) {
      setFilteredRows(
        reservations.map((reservation) => ({
          id: reservation.id,
          eventName: reservation.eventName,
          eventDate: new Date(reservation.eventDate).toLocaleDateString(),
          startTime: reservation.startTime,
          endTime: reservation.endTime,
          status: reservation.status || 'N/A',
        }))
      );
    } else {
      setFilteredRows([]);
    }
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Reservation ID', flex: 1 },
    { field: 'eventName', headerName: 'Event Name', flex: 1 },
    { field: 'eventDate', headerName: 'Event Date', flex: 1 },
    { field: 'startTime', headerName: 'Start Time', flex: 1 },
    { field: 'endTime', headerName: 'End Time', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    {
      field: 'view',
      headerName: 'View',
      flex: 1,
      renderCell: (params) => (
        <Button
          className="view-button"
          variant="contained"
          onClick={() => handleViewClick(params.row.id)}
        >
          View
        </Button>
      ),
    },
  ];

  const handleSearch = (query: string) => {
    const reservations: Reservation[] = [
    
      { id: 1, eventName: 'Annual Meeting', eventDate: '2024-09-01', startTime: '02:00 PM', endTime: '04:00 PM', status: 'Pending' },
    ];

    if (query) {
      setFilteredRows(
        reservations.filter((reservation) =>
          reservation.eventName.toLowerCase().includes(query.toLowerCase())
        ).map((reservation) => ({
          id: reservation.id,
          eventName: reservation.eventName,
          eventDate: new Date(reservation.eventDate).toLocaleDateString(),
          startTime: reservation.startTime,
          endTime: reservation.endTime,
          status: reservation.status || 'N/A',
        }))
      );
    } else {
      setFilteredRows(
        reservations.map((reservation) => ({
          id: reservation.id,
          eventName: reservation.eventName,
          eventDate: new Date(reservation.eventDate).toLocaleDateString(),
          startTime: reservation.startTime,
          endTime: reservation.endTime,
          status: reservation.status || 'N/A',
        }))
      );
    }
  };

  return (
    <div>
      <SearchBox />
      <Box
        sx={{
          height: 400,
          width: '100%',
          overflow: 'auto',
          '@media (max-width:600px)': {
            width: '100%',
            overflowX: 'auto',
          },
        }}
      >
        <Box sx={{ minWidth: 800 }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
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
      </Box>
    </div>
  );
};

export default PendingTable;
