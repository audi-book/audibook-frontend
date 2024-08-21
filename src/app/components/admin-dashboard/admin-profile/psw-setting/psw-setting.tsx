import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "./psw-setting.css";



const PasswordSettingsForm: React.FC = () => {

  return (
    <MDBContainer className="margin-applier">
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className="overall">
            <MDBCardBody>
              <h4>Password Settings</h4>
              <br />
              <br />
              <MDBRow>
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type= "text"
                      id="oldPassword"
                      className="form-control"
                      value=""
                    //   onChange={handleInputChange}
                      
                    />
                    <label htmlFor="oldPassword" className={`form-label`}>
                      Old Password
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="newPassword"
                      className="form-control"
                      value=""
                    //   onChange={handleInputChange}
                    />
                    <label htmlFor="newPassword" className={`form-label`}>
                      New Password
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type="text"
                      id="confirmPassword"
                      className="form-control"
                      value=""
                    //   onChange={handleInputChange}
                    />
                    <label htmlFor="confirmPassword" className={`form-label`}>
                      Confirm Password
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-3">
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type="checkbox"
                      id="showPassword"
                    //   checked={formData.showPassword}
                    //   onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="showPassword"
                      className="form-label-checkbox"
                    >
                      Show password
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="password-btn">
                    Save changes
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <MDBBtn className="password-btn">Clear</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PasswordSettingsForm;
