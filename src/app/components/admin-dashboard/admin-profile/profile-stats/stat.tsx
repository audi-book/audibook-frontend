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
                                {/* Full Name */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText> Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {/*Name here*/}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />

                                {/* Admin ID */}
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Admin ID</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">
                                            {/*Admin id here*/}
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
