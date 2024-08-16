import React from "react";
import { 
    MDBCol, 
    MDBContainer, 
    MDBRow, 
    MDBCard, 
    MDBCardText, 
    MDBCardBody, 
    MDBCardImage 
} from "mdb-react-ui-kit";

interface ProfileProfileStatProps {
    admin: any;
    refetch: any;
}

const ProfileStats: React.FC = () => {
    return (
        <section style={{ backgroundColor: "white" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    
                    <MDBCol lg="12">
                        <MDBCard
                            className="mb-4"
                            style={{
                                backgroundColor: "var(--light-grey)",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <MDBCardBody>
                                {/* Event Name */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Event Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {/*Name here*/}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />

                                {/* Event ID */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Event ID</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {/*Event id here*/}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                {/* Contact No */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Contact No</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {/*Contact No here*/}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                {/* Account Status */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText> Status</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {/*Verification stats here*/}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};
export default ProfileStats;
