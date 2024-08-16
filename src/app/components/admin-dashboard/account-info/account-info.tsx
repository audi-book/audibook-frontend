import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import './account-info.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const AccountInformationForm: React.FC = () => {

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className='overall'>
            <MDBCardBody>
              <h4>Account Information</h4>
              <br />
              <br />
              <MDBRow>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="eventName"
                      className="form-control"
                      value=""
                    />
                    <label htmlFor="eventName" className={`form-label`}>
                      Event name
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="eventDate"
                      className="form-control"
                    />
                    <label htmlFor="eventDate" className={`form-label`}>
                      Event Date
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="startTime"
                      className="form-control"
                      value=""
                    />
                    <label htmlFor="startTime" className={`form-label`}>
                      Start Time
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="endTime"
                      className="form-control"
                    />
                    <label htmlFor="endTime" className={`form-label`}>
                      End time
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-3">
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <textarea
                      id="purpose"
                      className="form-control"
                    ></textarea>
                    <label htmlFor="purpose" className={`form-label`}>
                      Purpose
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button" href="/admin-dashboard/reservations">
                    Go Back
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <DropdownButton
                    id="status-dropdown"
                    title="Pending"
                    variant="secondary"
                  >
                    <Dropdown.Item href="#">Not Started</Dropdown.Item>
                    <Dropdown.Item href="#">Pending</Dropdown.Item>
                    <Dropdown.Item href="#">Approved</Dropdown.Item>
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
