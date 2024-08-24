import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StatCard from "../stat-card/statcard";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ApprovalIcon from "@mui/icons-material/Approval";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import { useGetAllEventsQuery } from "../../../../../redux/features/auth/eventApi";
import { CircularProgress } from "@mui/material";

const StatsRow: React.FC<{ organizationId: number }> = ({ organizationId }) => {
  const { data: eventData, isLoading, error } = useGetAllEventsQuery({});

  const pendingCount =
    eventData?.data.filter((event: any) => event.status === "Pending").length ||
    0;
  const approvedCount =
    eventData?.data.filter((event: any) => event.status === "Approved")
      .length || 0;
  const upcomingCount =
    eventData?.data.filter(
      (event: any) =>
        event.status === "Approved" && new Date(event.eventDate) > new Date()
    ).length || 0;
  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error loading events data.</div>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<PendingActionsIcon style={{ fontSize: "2rem" }} />}
            stat={pendingCount.toString()}
            label="Pending Events"
            color="green"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<ApprovalIcon style={{ fontSize: "2rem" }} />}
            stat={approvedCount.toString()}
            label="Approved Events"
            color="blue"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<UpcomingIcon style={{ fontSize: "2rem" }} />}
            stat={upcomingCount.toString()}
            label="Upcoming Events"
            color="purple"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default StatsRow;
