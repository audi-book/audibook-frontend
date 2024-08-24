import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { useUpdateUserMutation } from "../../../../../../redux/features/auth/userApi";
import "./account-info.css";
import toast from "react-hot-toast";

const AccountInformationForm: React.FC<{ user: any; refetch: any }> = ({
  user,
  refetch,
}) => {
  const [updateUser, { isSuccess, isError }] = useUpdateUserMutation();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setContact(user.contact || "");
    }
  }, [user]);
  useEffect(() => {
    if(isSuccess){
      toast.success("User details update success")
    }
    if(isError){
      toast.error("User update error")
    }
  }, [isError, isSuccess]);
  const handleSave = async () => {
    try {
      await updateUser({ id: user.id, name, contact }).unwrap();
      refetch();
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleClear = () => {
    if (user) {
      setName(user.name || "");
      setContact(user.contact || "");
    }
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <MDBCard className="overall">
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                    <label htmlFor="contactNo" className={`form-label`}>
                      Contact No
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button" onClick={handleSave}>
                    Save changes
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <MDBBtn className="ac-info-button" onClick={handleClear}>
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
