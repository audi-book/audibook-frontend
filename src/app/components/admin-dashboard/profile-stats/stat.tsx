import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBBtn
} from "mdb-react-ui-kit";
import { useGetEventByIdQuery } from "../../../../../redux/features/auth/eventApi"; 

const ProfileStats: React.FC<{ eventId: number }> = ({ eventId }) => {
  const { data: eventData, isLoading, error } = useGetEventByIdQuery(eventId);

  if (isLoading) return <div>Loading...</div>;

  const event = eventData?.data;

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
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Event ID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {event?.id || 'N/A'}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Event Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {event?.eventName || 'N/A'}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Event Status</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {event?.status || 'N/A'}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {event?.eventDate || 'N/A'}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Start Time</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {event?.startTime || 'N/A'}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>End Time</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {event?.endTime || 'N/A'}
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
