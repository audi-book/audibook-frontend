'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import SearchBox from '../search-box/search-box';
import './pending-list.css';
import { useRouter } from 'next/navigation';
import { useGetAllEventsQuery } from '../../../../../../redux/features/auth/eventApi'; 

interface Reservation {
  id: number;
  eventName: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  status: string;
}

const PendingTable: React.FC = () => {
  const [filteredRows, setFilteredRows] = useState<Reservation[]>([]);
  const { data: eventData } = useGetAllEventsQuery({});
  const router = useRouter();

  const handleViewClick = (id: number) => {
    router.push(`/admin-dashboard/pending-reservations/${id}`);
  };

  useEffect(() => {
    if (eventData && eventData.data) {
      const pendingEvents = eventData.data.filter((event: any) => event.status === 'Pending');
      
      setFilteredRows(
        pendingEvents.map((event: any) => ({
          id: event.id,
          eventName: event.eventName,
          eventDate: new Date(event.eventDate).toLocaleDateString(),
          startTime: event.startTime,
          endTime: event.endTime,
          status: event.status || 'N/A',
        }))
      );
    }
  }, [eventData]);

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
    if (eventData && eventData.data) {
      const pendingEvents = eventData.data.filter((event: any) => event.status === 'Pending');

      setFilteredRows(
        pendingEvents
          .filter((event: any) =>
            event.eventName.toLowerCase().includes(query.toLowerCase())
          )
          .map((event: any) => ({
            id: event.id,
            eventName: event.eventName,
            eventDate: new Date(event.eventDate).toLocaleDateString(),
            startTime: event.startTime,
            endTime: event.endTime,
            status: event.status || 'N/A',
          }))
      );
    }
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
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
