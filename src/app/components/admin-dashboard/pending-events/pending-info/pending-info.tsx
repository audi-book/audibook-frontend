'use client';
import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useUpdateEventStatusMutation } from '../../../../../../redux/features/auth/eventApi'; 

const AccountInformationForm: React.FC<{ eventId: any }> = ({ eventId }) => {
  const [status, setStatus] = useState<string>('Pending');
  const [updateEventStatus] = useUpdateEventStatusMutation();
  
  const handleStatusChange = (newStatus: string) => {
      updateEventStatus({
        eventId,
        status: newStatus,
      })
        .unwrap()
        .then(() => {
          setStatus(newStatus); 
          
        })
        .catch((error) => {
          console.error('Failed to update status:', error);
        });
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className='overall'>
            <MDBCardBody>
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button" href="/admin-dashboard/pending-reservations">
                    Go Back
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <DropdownButton
                    id="status-dropdown"
                    title={status}
                    variant="secondary"
                  >
                    <Dropdown.Item onClick={() => handleStatusChange('Pending')}>
                      Pending
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleStatusChange('Approved')}>
                      Approved
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleStatusChange('Rejected')}>
                      Rejected
                    </Dropdown.Item>
                  </DropdownButton>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AccountInformationForm;
