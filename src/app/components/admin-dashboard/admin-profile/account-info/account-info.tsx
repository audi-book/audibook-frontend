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
                      id="fullName"
                      className="form-control"
                      value=""
                    />
                    <label htmlFor="fullName" className={`form-label`}>
                      Full Name
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="contactNo"
                      className="form-control"
                    />
                    <label htmlFor="contactNo" className={`form-label`}>
                     Contact No
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button">
                    Save changes
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button">
                    Clear
                  </MDBBtn>
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
