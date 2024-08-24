import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdb-react-ui-kit";
import { useResetPasswordMutation } from "../../../../../../redux/features/auth/userApi"; 
import "./psw-setting.css";
import toast from "react-hot-toast";

const PasswordSettingsForm: React.FC<{ userId: any }> = ({ userId }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resetPassword,{isSuccess,isError}] = useResetPasswordMutation();

  const handleSave = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.")
      return;
    }
    try {
      await resetPassword({ id: userId, oldPassword, password: newPassword }).unwrap();
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error('Failed to update password:', error);
    }
  };
  useEffect(() => {
    if(isSuccess){
      toast.success("Password updated successfully.")
    }
    if(isError){
      toast.error("Failed to update password. Please try again.")
    }
  }, [isError, isSuccess]);

  const handleClear = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handlePasswordToggle = () => {
    setShowPassword(prev => !prev);
  };

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
                      type={showPassword ? "text" : "password"}
                      id="oldPassword"
                      className="form-control"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <label htmlFor="oldPassword" className="form-label">
                      Old Password
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="newPassword"
                      className="form-control"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                  </div>
                </MDBCol>
                <MDBCol md="12">
                  <div className="custom-input mb-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label htmlFor="confirmPassword" className="form-label">
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
                      checked={showPassword}
                      onChange={handlePasswordToggle}
                    />
                    <label htmlFor="showPassword" className="form-label-checkbox">
                      Show password
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4">
                <MDBCol md="auto">
                  <MDBBtn className="password-btn" onClick={handleSave}>
                    Save changes
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto">
                  <MDBBtn className="password-btn" onClick={handleClear}>
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

export default PasswordSettingsForm;
